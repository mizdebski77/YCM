import React from 'react';
import logo from '../Images/whiteLogo.svg';
import buble from '../Images/footerBuble.svg'
export const Footer = () => {
    return (
        <footer className="footer footer-center bg-blue text-primary-content p-8">
            <img src={buble.src} alt='footer buble' className='absolute right-0' />
            <aside className='border-b w-full p-4 pb-12'>
                <img src={logo.src} alt='logo' className='md:max-w-80 max-w-32' />

                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="  ">
                    <span>Project and realistaion : <a className='font-bold'>Marcin Izdebski</a></span>
                </div>
            </nav>
        </footer>
    );
};
