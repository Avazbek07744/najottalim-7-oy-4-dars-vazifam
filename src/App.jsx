import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Deteil from './pages/Deteil'
import Orders from './pages/Orders'
import Checkout from './pages/Checkout'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import MainLeout from './leout/MainLeout'
import { createContext } from 'react'

export const UseCart = createContext()

const App = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem('token'))
  const param = useParams()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
    else {
      if (!(location.pathname == '/' || location.pathname.includes('register') || location.pathname.includes('about') || location.pathname.includes('product') || location.pathname.includes('cart'))) {
        navigate('/login')
      }
    }
  }, [navigate])

  const Protection = (isAuth, children) => {
    if (!isAuth) {
      navigate('/login')
    }
    return children
  }

  return (
    <div>
      <UseCart.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/'
            element={
              <MainLeout>
                <Home></Home>
              </MainLeout>}>
          </Route>

          <Route path='/about'
            element={
              <MainLeout>
                <About></About>
              </MainLeout>}>
          </Route>

          <Route path='/cart'
            element={
              <MainLeout>
                <Cart></Cart>
              </MainLeout>}>
          </Route>

          <Route path='/products'
            element={
              <MainLeout>
                <Products></Products>
              </MainLeout>}>
          </Route>

          <Route path='/products/:id'
            element={
              <MainLeout>
                <Deteil></Deteil>
              </MainLeout>}>
          </Route>

          <Route path='/orders'
            element={

              <MainLeout>
                <Orders></Orders>
              </MainLeout>
            }>

          </Route>
          <Route path='/checkout'
            element={

              <MainLeout>
                <Checkout></Checkout>
              </MainLeout>
            }>

          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>

        </Routes>
      </UseCart.Provider>
    </div>
  )
}

export default App
