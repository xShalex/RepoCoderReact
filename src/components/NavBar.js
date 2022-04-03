import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'Todo hardware' },
    { id: '123asf', address: '/category/A', text: 'Procesadores' },
    { id: 'sgs3q3', address: '/category/B', text: 'Placas de video' },
    { id: 'gkl98s', address: '/category/C', text: 'Mothers' },
  ];

  return (
    <section style={{ background: 'lightgray' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}
            >
              {cat.text}
            </NavLink>
          </div>
        );
      })}
    </section>
  );
};