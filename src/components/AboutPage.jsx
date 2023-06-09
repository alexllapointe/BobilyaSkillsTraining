import React from 'react';
import image from '../assets/aboutimg.jpeg';




const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div id="about" className="container mx-auto px-4 py-8">
        <h1 className="underline font-bold text-center text-4xl text-black mb-4 pt-4">
          About Me
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt="about-me"
              className="w-full h-auto rounded-lg pb-4"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="ml-8 mt-4">
              <p className="text-black leading-relaxed">
                I am a business major at Indiana University with a passion for basketball and a desire to help young athletes reach their full potential, which is what led me to found Bobilya Skills Training in 2021. As a three-year captain of the basketball team at Guerin Catholic with a distinguished athletic background, I am well-qualified to teach the game to young players.
              </p>
              <p className="text-black leading-relaxed mt-4">
                At Bobilya Skills Training, our mission is to provide detailed instruction on shooting, ball handling, finishing, and other fundamental basketball skills, while fostering a competitive environment that allows players to develop their abilities in game-like situations. Our drills and training sessions are designed to challenge and motivate players while providing a supportive and encouraging atmosphere that promotes growth and development.
              </p>
              <p className="text-black leading-relaxed mt-4">
                We believe that basketball can help build character, discipline, leadership, and mental toughness. Our coaches are dedicated to helping players become well-rounded athletes and individuals, and we take pride in our ability to help them achieve their full potential both on and off the court.
              </p>
              <p className="text-black leading-relaxed mt-4">
                Join us at Bobilya Skills Training and take the first step towards realizing your full potential as a basketball player.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
