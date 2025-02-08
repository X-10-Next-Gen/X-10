import React from 'react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import career from '../assets/career.jpg';
import ps from '../assets/ps.webp';

const AboutUs = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        <div className="p-15 text-lg bg-gray-200 rounded-2xl">
          <h2 className="text-xl font-bold">About Us - X-10 Gaming</h2>
          <p>Welcome to X-10 Gaming – The Ultimate Gaming Experience!</p>
          <p>
            At X-10 Gaming, we live and breathe gaming. Whether you’re a competitive eSports player, a casual gamer, or someone looking for the latest gaming news, we’ve got you covered.
          </p>
        </div> 
        <img src={img1} alt=""  className="rounded-2xl w-full" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mt-10">
        <img src={ps} alt="" className="rounded-2xl w-full" />
        <div className="p-5 text-lg bg-gray-200 rounded-2xl">
          <h2 className="text-xl font-bold">🎮 Who We Are</h2>
          <p>
            We are a team of dedicated gamers, developers, and tech enthusiasts committed to building a next-level gaming community. Our mission is simple:
          </p>
          <ul className="list-disc pl-5">
            <li>✅ Provide an engaging gaming experience for all skill levels.</li>
            <li>✅ Build a global community of players, streamers, and gaming enthusiasts.</li>
            <li>✅ Deliver top-tier content, reviews, and events to keep you ahead in the gaming world.</li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mt-10">
        <div className="p-5 text-lg bg-gray-200 rounded-2xl">
          <h2 className="text-xl font-bold">Career at X-10 Industries</h2>
          <p>
            We want to provide you with a platform to grow and excel as an individual, unleash your potential and make an impact in your region.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-lg mt-5 hover:bg-blue-700 duration-300 ease-in">
            Apply Now
          </button>
        </div>
        <img src={career} alt="" className="rounded-2xl w-full" />
      </div>
    </div>
  );
};

export default AboutUs;