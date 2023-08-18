'use client';

import Image from 'next/image';
import { useState } from 'react';
import Cart from '../Cart';
import NavLink from './NavLink';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black text-white">
      <Image
        src="https://img.represent.com/uploads/users/1353172/e79b5bdd46b790b7ce393429c8a92366.png?"
        width={130}
        height={130}
        alt="Picture of the website logo"
      />

      <div className="hidden md:flex space-x-4">
        <NavLink href="/">Home</NavLink>
        <Cart itemCount={2} />
      </div>
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-gray-800 text-white p-4 space-y-2">
          <NavLink href="/">Home</NavLink>
          <Cart />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
