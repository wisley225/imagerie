'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import '../../app/globals.css'
const Header = () => {
 

  return (
    <div className=' px-5   bg-gradient-to-tl   from-cyan-100 via-teal-100 h-svh  pt-20'>

<div className=' absolute  top-72 z-20  mb-5    w-5/12 flex flex-col  items-center'>
<h1 className=' mb-5   text-center  text-4xl uppercase font-black font-serif '>Le traitement d’images simple, rapide et puissant. </h1>
<p className=' mb-5  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, temporibus odit sunt numquam modi facere earum corrupti quos? Repellendus quam delectus amet cum voluptatum, fuga similique eaque earum, dolore asperiores dolor quidem qui reprehenderit nesciunt reiciendis ea, tempore non eius.</p>
<button className=' cursor-pointer hover:bg-cyan-500 transition-all border bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Get Started</button>
</div>



   <div className=' paysage relative left-[600px]  h-60 w-80  -rotate-10   rounded-md shadow-2xl '>
 <Image
  src='/paysage1.jpg'
  alt='paysage'
 fill
 className=' object-cover border rounded-md'
  />
    </div>   
 
  <div className=' paysage relative h-60 w-80 left-[900px] bottom-40 rotate-10 rounded-md shadow-2xl '>
 <Image
  src='/paysage2.jpg'
  alt='paysage'
 fill
 className=' object-cover border rounded-md'
  />
    </div> 
      <div className=' paysage relative h-60 w-80  left-[700px] bottom-60 rotate-5 rounded-md shadow-2xl '>
 <Image
  src='/paysage3.jpg'
  alt='paysage'
  fill
 className=' object-cover border rounded-md'
  />
    </div> 


  
   
    </div>
  );
};

export default Header;