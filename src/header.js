import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <img className='headerlogo' src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg'/>
        <div className='headersearch'>
            <input 
               className='headersearchinput'
               type='text'/>
        </div>

        <div className='headernav'>
            <div className='headeroption'>
                <span className='headerline1'>hello guest</span>
                <span className='headerline2'>signin</span>
            </div>
        </div>
        <div className='headernav'>
            <div className='headeroption'>
                <span className='headerline1'>return</span>
                <span className='headerline2'>&order</span>
            </div>
        </div>
        <div className='headernav'>
            <div className='headeroption'>
                <span className='headerline1'>Your</span>
                <span className='headerline2'>prime</span>
            </div>
        </div>

    </div>
  )
}

export default Header