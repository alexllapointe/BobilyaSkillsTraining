import React from 'react'
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const ContactPage = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200">
            <h1 className="text-4xl font-bold text-center mb-4">Connect with us.</h1>
            <img src={logo} alt="logo" className="rounded-full w-48 h-48 mb-4" />
            <div className="flex space-x-4">
                <a href="https://www.instagram.com/bobilyaskillstraining/">
                    <img src={instagram} alt="Instagram Logo" className="w-8 h-8" />
                </a>
                <a href="https://twitter.com/BobilyaTraining">
                    <img src={twitter} alt="Twitter Logo" className="w-8 h-8" />
                </a>
            </div>
            <div>
                <p className="text-2xl font-bold text-center pt-4">@BobilyaSkillsTraining on all platforms.</p>
            </div>
        </div>

    )
}

export default ContactPage