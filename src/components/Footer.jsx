import React from 'react';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

function Footer() {
    return (
        <div className="bg-blue-500 p-6 flex justify-between items-center">
            <div className="flex items-center space-x-4 flex-grow">
                <a href="https://www.instagram.com/bobilyaskillstraining/" className="flex items-center justify-center">
                    <img src={instagram} alt="Instagram" className="h-8 w-8" />
                </a>
                <a href="https://twitter.com/BobilyaTraining" className="flex items-center justify-center">
                    <img src={twitter} alt="Twitter" className="h-8 w-8" />
                </a>
            </div>
            <p className="text-xs opacity-30 ml-auto">
                &copy; {new Date().getFullYear()} Alex LaPointe.
            </p>
        </div>
    );
}

export default Footer;
