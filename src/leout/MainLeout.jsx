import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Cart from '../pages/Cart'

const MainLeout = ({ children }) => {
    return (
        <div>
            <header className='bg-[#F0F6FF]'>
                <nav className='flex justify-between items-center py-3 max-w-[1200px] mx-auto'>
                    <div className="bg-[#057AFF] w-max text-3xl font-semibold text-white rounded-md">
                        <h1 className='pb-1 px-2 pe-3'>C</h1>
                    </div>
                    <ul className='flex gap-3 text-[#394E9A] '>
                        <NavLink to='/' className={`px-4 p-1 rounded-md`}>Home</NavLink>
                        <NavLink to='/about' className={`px-4 p-1 rounded-md li`}>About</NavLink>
                        <NavLink to='/products' className={`px-4 p-1 rounded-md li`}>Products</NavLink>
                        <NavLink to='/cart' className={`px-4 p-1 rounded-md li`}>Cart</NavLink>
                    </ul>

                    <div>
                        <button>{/* <img src="" alt="" /> */}</button>
                        <button>{/* <img src="" alt="" /> */}</button>
                    </div>
                </nav>
            </header>
            {
                children
            }
        </div>
    )
}

export default MainLeout
