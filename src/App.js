
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/main-layout';
import { About } from './pages/about/about';
import { Buyproducts } from './pages/buyproducta/buyproducts';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { FastFood } from './pages/home/pages/fastfood/fastfood';
import { FreshBerries } from './pages/home/pages/fresh/fresh';
import { Fruit } from './pages/home/pages/fruit/fruit';
import { MenuPage } from './pages/home/pages/MenuPage/menuPage';
import { OcenFooods } from './pages/home/pages/oceanFooods/ocenFooods';
import { Vegetables } from './pages/home/pages/vegetables/vegetables';
import { Water } from './pages/home/pages/Water/water';
import { MainProducts } from './pages/Products/main-products';



function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
         <Route path='home' element={<Home/>}>
             <Route index element={<MenuPage/>}/>
             <Route path='vegetables' element={<Vegetables/>}/>
             <Route path='fruits' element={<Fruit/>}/>
             <Route path='freshberries' element={<FreshBerries/>}/>
             <Route path='oceanfoods' element={<OcenFooods/>}/>
             <Route path='fastfood' element={<FastFood/>}/>
             <Route path='water' element={<Water/>}/>
          </Route>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='MainProducts/:id' element={<MainProducts/>}/>
          <Route path='BuyProducts' element={<Buyproducts/>}/>
      </Route>
      <Route path='*' element={<h2>Page not found</h2>}/>
    </Routes>
  );
}

export default App;
