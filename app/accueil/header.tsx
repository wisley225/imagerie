'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const Header = () => {
 

  return (
    <div className=''>
      {/* <div className='border h-60 place-content-center place-items-center bg-black text-white'>
        <h1 className='text-5xl font-black mb-2 font-serif'>Votre éditeur de photo en ligne</h1>
        <h2 className='font-serif'>Une multitude d'outils gratuits pour éditer vos images par lot</h2>
      </div> */}

<div>
  <div className=' relative h-80 w-40'>
 <Image
 src='/imgHead.png'
 fill
 alt='header image'

 />
  </div>

</div>
   
    </div>
  );
};

export default Header;