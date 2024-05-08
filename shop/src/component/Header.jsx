import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='header-container'>
        <div className='header-wrap'>
            <nav className='header-left-wrap'>
                <ul>
                    <li>
                        <Link className='logo' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/inner'>INNER</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/shirt'>SHIRT</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/knit'>KNIT</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/outer'>OUTER</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/pants'>PANTS</Link>
                    </li>
                </ul>
            </nav>
            <nav className='header-right-wrap'>
                <button>Login</button>
            </nav>
        </div>
    </div>
    )
}