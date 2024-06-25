import React from 'react';
import logo from '../common/Images/blackLogo.svg';

export const Navigation = () => {
    return (
        <nav className="navbar bg-[#f7f7f7] sticky top-0 z-20 px-12 py-4">
            <div className="navbar-start">
                <a href='/hero' className="text-xl">
                    <img src={logo.src} alt='logo' />
                </a>
            </div>
        </nav>
    );
};
