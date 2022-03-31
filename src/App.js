import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

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
      </Routes>
    </BrowserRouter>
  );
}
