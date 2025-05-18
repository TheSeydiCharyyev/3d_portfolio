import React from 'react'

const NavBar = () => {
    return (
        <header className='navbar'>
            <div className='inner'>
                <a className='logo' href="#hero">
                    Seydi Charyyev
                </a>
                <nav className='desktop'>

                </nav>
                <a href="#contact" className='contact-btn group'></a>
                <div className='inner'>
                    <span> Contact Me</span>
                </div>
            </div>
        </header>
    )
}

export default NavBar