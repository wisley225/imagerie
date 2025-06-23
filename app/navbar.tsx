import React from 'react';
import Image from 'next/image';
import { FaUserCircle } from "react-icons/fa";



const Navbar = () => {
    // bg-gradient-to-l  from-cyan-600 via-teal-400 
    return ( 
        <nav className=' hover:bg flex   justify-around py-1 shadow-xl   rounded-b-xl  absolute z-30 w-full backdrop-brightness-125'>
           
            <div className='relative w-40 h-20 '>
             <Image
             src='/logoImagerie.png'
             alt='logo imagerie'
             fill
             className='object-cover object-center'
             />
            </div>
            <ul className='  bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400   via-cyan-600 font-semibold flex  items-center w-full justify-around uppercase'>
                <li className=' bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm  hover:brightness-75 cursor-pointer transition-all'>redimenssionner des images</li>
                <li className=' bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all'>Compresser des images</li>
                <li className=' bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all'>Convertir des images</li>
                <li className=' bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all'>Rognager des Image</li>
                <li className=' bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600text-sm hover:brightness-75 cursor-pointer transition-all'>rotation des images</li>
                <li className='text-3xl cursor-pointer hover:text-white transition-all'><FaUserCircle/> </li>
            </ul>
            
        </nav>
    );
}

export default Navbar;























