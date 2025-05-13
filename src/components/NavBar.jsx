import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    return (
        <header className='navbar'>
            <div className='inner'>
                <a className='logo' href='#hero'>
                    Seydi Charyyev
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>

                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>

                    </div>

                </a>
            </div>

        </header>
    )
}

export default NavBar