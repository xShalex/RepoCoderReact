import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemCount } from './components/ItemCount';
import Cart from './components/Cart';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />

        <Route
          path="/category/:catId"
          element={<ItemListContainer greeting={'FILTRADO'} />}
        />

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />

        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}
