import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import ProductsDetails from './ProductsDetails'
import Products from './Products'
const App=()=>{
return(
    <BrowserRouter>
  <Routes>
    <Route path='/'element={<Products/>}/>

  <Route path="/user/:id" element={<ProductsDetails />} /> 

  </Routes>
  </BrowserRouter>
)
}

export default App
