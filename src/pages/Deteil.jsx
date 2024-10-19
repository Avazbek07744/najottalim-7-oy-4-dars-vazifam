import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { lord } from '../axios'
import { UseCart } from '../App'

const Deteil = () => {
    // const [user, setUser] = useContext(UserContext);
    const param = useParams()
    const [books, setBooks] = useState({})
    const [selectedColor, setSelectedColor] = useState(null)

    useEffect(() => {
        lord.get(`/products/${param.id}`)
            .then((data) => {
                setBooks(data.data.data)
            })
            .catch((err) => {
                console.error('Error fetching book data:', err)
            })
    }, [param.id])

    if (!books.attributes) {
        return <div>Loading...</div>
    }

    const hemdelAdd = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <ul className='mt-20 flex gap-5 max-w-[1190px] mx-auto'>
                <Link to='/' className={`hover:underline text-lg text-[#394E6A]`}>Home</Link>
                <Link to='/products' className={`hover:underline text-lg text-[#394E6A]`}>Products</Link>
            </ul>
            <div className='container flex gap-5 justify-between max-w-[1250px] mx-auto items-start p-7 bg-transparent'>
                <img className='w-[512px] object-cover h-96 rounded-xl' src={books.attributes.image} alt="book img" />
                <div className="px-5">
                    <h2 className="text-3xl font-bold mb-3 capitalize text-[#394E6A]">{books.attributes.title}</h2>
                    <h2 className="text-xl font-bold mb-3">{books.attributes.company}</h2>
                    <h2 className="text-xl mb-5 capitalize text-[#394E6A]">${books.attributes.price}</h2>
                    <p className={`w-[580px] text-lg text-[#394E6A]`}>{books.attributes.description}</p>
                    <div className="my-2">
                        <h4 className='text-md mb-2 font-semibold text-[#394E6A] mt-5'>Colors</h4>
                        <ul className="flex gap-3">
                            {books.attributes.colors && books.attributes.colors.map((col, index) => (
                                <li
                                    key={index}
                                    style={{ backgroundColor: col, border: selectedColor === col ? '1px solid black' : 'none' }}
                                    onClick={() => setSelectedColor(col)}
                                    className="p-3 w-max rounded-full cursor-pointer">
                                </li>
                            ))}
                        </ul>
                        <h4 className='text-md mb-2 font-semibold text-[#394E6A] mt-5'>Amount</h4>
                        <select className="select border border-black text-black bg-transparent w-full max-w-xs">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                        </select>
                    </div>
                    <button onClick={hemdelAdd} className='uppercase py-3 px-5 bg-[#463AA1] rounded-md text-[#DBD4ED] mt-10'>add to bag</button>
                </div>
            </div>
        </div>
    )
}

export default Deteil
