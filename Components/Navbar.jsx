import  React from 'react';
import { useState } from 'react';

import logoo from '../assests/ME_log_3.png';
import Link from 'next/link';
import { AiFillShopping, AiOutlineMenu } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
        <p className="logo">
            <Link href="/">M and E Trends</Link>
        </p>
        <input id="seachInput" className="searchInput" type="text" placeholder="Search Here..." />
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiFillShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
    </div>
  )
}

export default Navbar
