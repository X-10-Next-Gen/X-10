import React from 'react'
import { Link } from 'react-router-dom';
import game from '../assets/game.jpg';
import game2 from '../assets/gamee2.jpg';
import esports from '../assets/esports.png';
import icon from '../assets/icon.png'
import games from '../assets/games.png'
import black from'../assets/black.webp';
import cod from '../assets/cod.webp';
import datv from '../assets/datv.webp';
import dbs0 from '../assets/dbs0.webp';
import ds2 from '../assets/ds2.webp';
import dtd from '../assets/dtd.webp';
import gov from '../assets/gov.webp';
import goy from '../assets/goy.webp';
import lego from '../assets/lego.webp';
import sxs from '../assets/sxs.webp';
import asc from '../assets/asc.webp';
import cvii from '../assets/cvii.webp';
import sh2 from '../assets/sh2.webp';
import lntm from '../assets/lntm.webp';
import mto from '../assets/mto.webp';
import no1 from '../assets/no1.jpg';
import no2 from '../assets/no2.jpg';
import no3 from '../assets/no3.png';
import no4 from '../assets/no4.jpg';
import no5 from '../assets/no5.jpg';
import no6 from '../assets/no6.jpg';
import no7 from '../assets/no7.jpg';
import no8 from '../assets/no8.jpg';
import no9 from '../assets/no9.jpg';
import no10 from '../assets/no10.jpg';
import ij from '../assets/ij.webp';
import wh from '../assets/wh.webp';
import swosa from '../assets/swosa.webp';
import youtube from '../assets/youtube.webp';
import twitter from '../assets/twitter.webp';
import instagram from '../assets/instagram.webp';
import facebook from '../assets/facebook.webp';

const Home = () => {
  let width = '300px'
  
  return (
<div className="">
  <div className=" mt-15 w-full "> <img src={game} alt=" img" /></div>

  <div className=" shadow-2xl shadow-cyan-50/50 p-5">

   <h1 className='  text-4xl text-center mt-10 font-black text-cyan-400 '> What We Do </h1>
   <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 mt-20">
   <div className=" mt-3 text-center flex items-center flex-col rounded-2xl p-2 m-2 shadow-lg  shadow-cyan-500/50 mb-10">
    <img src={games} alt="" width={width} /> 
    <h1 className=' text-4xl text-cyan-500 font-bold m-5'>Esports</h1>
    <p className=' font-sans text-lg m-3 '>
      X-10 is a leading advocate and organizer of Esports events
      in Greater Southeast Asia, which strengthens our game ecosystem
      and increases user engagement.
    </p>
    </div>
    <div className="  mt-3 text-center flex items-center flex-col  rounded-2xl p-2 m-2 shadow-lg  shadow-cyan-500/50  mb-10">
    <img src={esports} alt="" width={width} /> 
    <h1 className=' text-4xl text-cyan-500 font-bold m-5'>Games</h1>
    <p className='font-sans text-lg m-2 '>
    X-10 is the exclusive operator of top-tier games in Greater 
    Southeast Asia. Through our X-10 platform, users can access 
    popular and engaging mobile and PC online games.
    </p>
    </div>
    <div className="  mt-3 text-center flex items-center flex-col  rounded-2xl p-2 m-2 shadow-lg  shadow-cyan-500/50  mb-10  "> 
    <img src={icon} alt="" width={width} />
    <h1 className=' text-4xl text-cyan-500 font-bold m-5'>Community</h1>
    <p className='font-sans text-lg m-2 '>
    Users can connect via X-10 Platform to connect with their 
    fellow gamers, get the latest news and updates around the 
    gaming community.
    </p>
    </div>
   </div>
   {/* <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full animate-[bounce_2s_infinite]">
  X-10
</div>
<div className="animate-[fadeIn_1.5s_ease-in-out]">
  Welcome to X-10
</div> */}

  </div>
  <div className="bg-black p-5 mt-10">
  <h1 className="text-4xl text-center font-black text-cyan-500 m-5">New Games Out Now</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 m-5 p-5 justify-center items-center">
    
    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out"> 
        <img src={black} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Black Myth: Wukong</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out"> 
        <img src={cod} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Call of Duty: Black Ops 6</p>
      </div>  
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">    
        <img src={datv} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Dragon Age: The Veilguard</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={dbs0} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Dragon Ball Sparking! Zero</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">     
        <img src={ds2} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Death Stranding 2: On The Beach</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">     
        <img src={dtd} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">DOOM: The Dark Ages</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">     
        <img src={gov} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">God of War: Ragnarök</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={goy} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Ghost of Yōtei</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={lego} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">LEGO Horizon Adventures</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={asc} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Assassin's Creed: Shadows</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={sxs} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Sonic x Shadow Generations</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={cvii} alt="" className="rounded-xl w-full h-auto object-cover"/>
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Civilization VII</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out shadow-2xl"> 
        <img src={sh2} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Silent Hill 2</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out"> 
        <img src={lntm} alt="" className="rounded-xl w-full h-auto object-cover" />
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Little Nightmares III</p>
      </div>
    </div>

    <div className="w-full">
      <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
        <img src={mto} alt="" className="rounded-xl w-full h-auto object-cover"/>
        <p className="text-lg text-cyan-400 font-sans text-center mt-2">Mafia: The Old Country</p>
      </div>
    </div>

    <div className="w-full">
  <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
    <img src={wh} alt="" className="rounded-xl w-full h-auto object-cover"/>
    <p className="text-lg text-cyan-400 font-sans text-center mt-2">Warhammer 40,000: Space Marine 2</p>
  </div>
</div>

<div className="w-full">
  <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
    <img src={swosa} alt="" className="rounded-xl w-full h-auto object-cover"/>
    <p className="text-lg text-cyan-400 font-sans text-center mt-2">Star Wars Outlaws</p>
  </div>
</div>

<div className="w-full">
  <div className="opacity-50 hover:opacity-100 duration-200 ease-in-out">  
    <img src={ij} alt="" className="rounded-xl w-full h-auto object-cover"/>
    <p className="text-lg text-cyan-400 font-sans text-center mt-2">Indiana Jones and the Great Circle</p>
  </div>
</div>


  </div>
</div>




<div className=" bg-gray-100 p-2 mt-10">
  <h1 className='  text-center text-4xl text-cyan-500 font-bold m-5'> Latest News on X-10 Blog</h1>

  <div className=" grid grid-cols-10 gap-105 m-5 p-5 justify-center items-center overflow-x-scroll scrollbar-hide">
    <div className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no10} alt=""className='rounded-xl ' />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no2} alt=""  className='rounded-xl'/>
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no3} alt="" />
      <h1  className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div  className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no4} alt="" />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div  className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no5} alt="" />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no6} alt="" />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div  className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no7} alt="" />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no8} alt="" />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div  className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no9} alt="" />
      <h1 >
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    <div  className=" w-100 text-center shadow-2xl shadow-gray-300 rounded-2xl m-5 p-10">
      <img src={no10} alt="" />
      <h1 className=' font-extralight text-cyan-500  mt-4'>
      New Monster Hunter Wilds trailer reveals Iceshard Cliffs and the monsters within
      </h1>
      <p  className=' font-light text-sm'>Hunters! 2025 is here, and the time to hunt in Monster Hunter Wilds is fast approaching. We are excited to share the latest trailer, as well as additional information on the second open beta test (OBT2). </p>
    </div>

    
  </div>
  </div>


  <div className=""></div>
</div>
  )
}

export default Home;