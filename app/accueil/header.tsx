'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import '../../app/globals.css'
import Link from 'next/link';
const Header = () => {
 

  return (

  <>
   <div>
   <div className="  h-svh ">
<div className=' h-full backdrop-blur-sm pt-20 px-5 '>
<div className='   absolute  top-64 z-20  mb-5   w-5/12 flex flex-col  items-center'>
<h1 className='  bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5   text-center  text-4xl uppercase font-black font-serif '>Le traitement d’images simple, rapide et puissant. </h1>
<p className=' mb-5  text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, temporibus odit sunt numquam modi facere earum 
  corrupti quos? Repellendus quam delectus amet cum voluptatum, fuga similique eaque earum, dolore asperiores dolor quidem qui reprehenderit 
  nesciunt reiciendis ea, tempore non eius.</p>
<Link href='/traitement' className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Get Started</Link>
</div>



   <div className=' paysage relative left-[600px]  top-20 h-60 w-80  -rotate-10   rounded-md shadow-2xl '>
 <Image
  src='/paysage1.png'
  alt='paysage'
 fill
 className=' object-cover border rounded-md'
  />
    </div>   
 
  <div className=' paysage relative h-60 w-80 left-[900px]   rotate-10 rounded-md shadow-2xl '>
 <Image
  src='/paysage2.jpg'
  alt='paysage'
 fill
 className=' object-cover border rounded-md'
  />
    </div> 
   <div className=' paysage relative h-60 w-80  left-[650px]   bottom-40 rotate-5 rounded-md shadow-2xl '>
 <Image
  src='/paysage3.jpg'
  alt='paysage'
  fill
 className=' object-cover border rounded-md'
  />
    </div>
</div>

 


  
   
    </div>

<h1  className='   bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-32   text-center  text-4xl uppercase font-black font-serif '>Redimensionner des images</h1>
<div className='  flex  justify-center items-center  gap-20  '>
 <div className='  paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 '>
  
  <Image
    src='/redimenssioner.png'
    alt='logo imagerie'
    fill
    className=' rounded-md object-cover  mx-auto'
  />
 </div>

  <div className=' h-[400px]  w-5/12  flex flex-col justify-around items-center text-center'>
   <strong className='text-2xl bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5 '>Redimensionnez des photos en choisissant vos dimensions en pixels ou en pourcentages.
 </strong>
  <p className=' font-semibold'>
Vous pouvez choisir de conserver le ratio largeur/hauteur ou choisir des dimensions libres.
Le traitement par lot permet de redimensionner plusieurs images en même temps puis de les télécharger dans une archive ZIP.
  
  </p>
  <p className='font-semibold'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore adipisci ex corporis? Expedita nostrum itaque, perferendis esse qui molestiae?
  </p>
  <button className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Redimmenssioner</button>

  </div>

</div>

{/*  section compresser */}

<h1  className='   bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-32   text-center  text-4xl uppercase font-black font-serif '>compressez vos image</h1>
<div className='  flex  justify-center items-center  gap-20  '>

  <div className=' h-[400px]  w-5/12  flex flex-col justify-around items-center text-center'>
   <strong className='text-2xl bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5 '>Compressez vos  photos en choisissant vos format en PNG , JPEG,WEBP.
 </strong>
  <p className=' font-semibold'>
Vous pouvez choisir de conserver le ratio largeur/hauteur ou choisir des dimensions libres.
Le traitement par lot permet de redimensionner plusieurs images en même temps puis de les télécharger dans une archive ZIP.
  
  </p>
  <p className='font-semibold'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore adipisci ex corporis? Expedita nostrum itaque, perferendis esse qui molestiae?
  </p>
  <button className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Compresser</button>

  </div>


 <div className='  paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 '>
  
  <Image
    src='/compresser.png'
    alt='image de compression'
    fill
    className=' rounded-md  mx-auto'
  />
 </div>

</div>

    </div>
  </>
   

  );
};

export default Header;