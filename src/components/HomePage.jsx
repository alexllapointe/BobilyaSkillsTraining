import React from 'react';
import image from "../assets/aboutmenew.jpeg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactPlayer from 'react-player';



const HomePage = () => {


    return (
        <div className='bg-gray-200'>
            <div className='h-screen'>
                <img
                    src={image}
                    alt="background"
                    className='w-full h-full object-cover'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:mt-0 mt-20'>
                    <Link to="/joe-website-new/booking">
                        <button className='md:mt-10 mb-5 bg-blue-500 hover:bg-opacity-50 text-white font-bold py-2 px-8 opacity-90 rounded-xl text-2xl'>
                            Book Now!
                        </button>
                    </Link>
                </div>
            </div>

            <div className=" flex justify-center p-10 rounded-xl ">
                <ReactPlayer
                    url="https://player.vimeo.com/video/834562004"
                    controls={true}
                />
            </div>
        </div>
    );
}

export default HomePage