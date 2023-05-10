import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='headerlogo' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg'/>

        <div className='headersearch'>
            <input 
               className='headersearchinput'
               type='text'/>
            <SearchIcon className='headersearchicon'/>
        </div>

        <div className='headernav'>
            <div className='headeroption'>
                <span className='headerline1'>Hello Guest</span>
                <span className='headerline2'>Sign In</span>
            </div>
        </div>
        <div className='headernav'>
            <div className='headeroption'>
                <span className='headerline1'>Return </span>
                <span className='headerline2'>&Order</span>
            </div>
        </div>
        <div className='headernav'>
            <div className='headeroption'>
                <span className='headerline1'>Your</span>
                <span className='headerline2'>prime</span>
            </div>
        <div className='headeroptionbasket'>
            <ShoppingBasketIcon/>
            <span className='headerbasket'>0</span>
        </div>
        </div>

    </div>
  )
}

export default Header