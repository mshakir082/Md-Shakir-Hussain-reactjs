import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import FavoriteProduct from '../Pages/FavoriteProduct';
import ProductsInfo from '../Pages/ProductsInfo';
import AddToProduct from '../Pages/AddToProduct';
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<FavoriteProduct />}></Route>
        <Route path='/product/:id' element={<ProductsInfo />}></Route>
        <Route path='/addToProduct' element={<AddToProduct />}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes
