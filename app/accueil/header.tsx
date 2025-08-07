'use client'
import  { useRef, useEffect} from 'react';
import Image from 'next/image';
import '../../app/globals.css'
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
 const cadreRef = useRef<HTMLDivElement>(null);
 const imgRef=useRef<(HTMLDivElement |null) []>([]);
const visibleRef = useRef<(HTMLDivElement | null)[]>([]);
 const rognerRef=useRef<(HTMLDivElement | null)[]>([])
 const pivoterRef=useRef<(HTMLDivElement | null)[]>([])
const visibleRef2 = useRef<(HTMLDivElement | null)[]>([]);
 const convertirRef=useRef<(HTMLDivElement | null)[]>([])

 const animateEnter = () =>{

if ( imgRef.current) {
  const ctx=gsap.context(()=>{

    if (cadreRef.current && imgRef.current) {
      const tl=gsap.timeline();
      tl.to(imgRef.current[0], {
        x: -200,
        duration: 0.2,
        ease: 'power2.inOut',
      })
      .to(imgRef.current[1], {
        x: 100,
        duration: 0.2,
        ease: 'power2.inOut',
      })
      .to(imgRef.current[2], {
        y: 100,
        duration: 0.2,
        ease: 'power2.inOut',
      });
    }


})
  return ()=>ctx.revert()
}

  
 }

 const animateLeave = () =>{

if ( imgRef.current) {
  const ctx=gsap.context(()=>{

    if (cadreRef.current && imgRef.current) {
      const tl=gsap.timeline();
      tl.to(imgRef.current[0], {
        x: 0,
        duration: 0.2,
        ease: 'power2.inOut',
      })
      .to(imgRef.current[1], {
        x: 0,
        duration: 0.2,
        ease: 'power2.inOut',
      })
      .to(imgRef.current[2], {
        y: 0,
        duration: 0.2,
        ease: 'power2.inOut',
      });
    }


})
  return ()=>ctx.revert()
}

  
 }

 useEffect(()=>{
const ctx=gsap.context( ()=>{
  if( visibleRef.current){
    gsap.from(visibleRef.current,{
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger:{
        trigger: visibleRef.current,
   
        start: 'top 80%',
      
      }
    })
  }
})

return ()=>ctx.revert()
 },[])


  useEffect(()=>{
const ctx=gsap.context( ()=>{
  if( visibleRef2.current){
    gsap.from(visibleRef2.current,{
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger:{
        trigger: visibleRef2.current,
       
        start: 'top 80%',
      
      }
    })
  }
})

return ()=>ctx.revert()
 },[])

  useEffect(()=>{
const ctx=gsap.context( ()=>{
  if( convertirRef.current){
    gsap.from(convertirRef.current,{
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger:{
        trigger: convertirRef.current,
       
        start: 'top 80%',
      
      }
    })
  }
})

return ()=>ctx.revert()
 },[])


  useEffect(()=>{
const ctx=gsap.context( ()=>{
  if( pivoterRef.current){
    gsap.from(pivoterRef.current,{
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger:{
        trigger: pivoterRef.current,
       
        start: 'top 80%',
      
      }
    })
  }
})

return ()=>ctx.revert()
 },[])
 
  useEffect(()=>{
const ctx=gsap.context( ()=>{
  if( rognerRef.current){
    gsap.from(rognerRef.current,{
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger:{
        trigger: rognerRef.current,
       
        start: 'top 80%',
      
      }
    })
  }
})

return ()=>ctx.revert()
 },[])

  return (

  <>
   <div className='px-10'>
   <div className="  h-svh   ">
<div className=' flex   justify-around   items-center h-full backdrop-blur-sm pt-20 px-5 '>
<div className=' top-64 z-20  mb-5    w-5/12 max-[840px]:w-full   flex flex-col  items-center'>
<h1 className='  bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5   text-center  text-4xl uppercase font-black font-serif '>Le traitement d’images simple, rapide et puissant. </h1>
<p className=' mb-5  text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, temporibus odit sunt numquam modi facere earum 
  corrupti quos? Repellendus quam delectus amet cum voluptatum, fuga similique eaque earum, dolore asperiores dolor quidem qui reprehenderit 
  nesciunt reiciendis ea, tempore non eius.</p>
<Link href='/traitement' className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Get Started</Link>
</div>

<div  onMouseEnter={()=>animateEnter()}
       onMouseLeave={()=> animateLeave()}
 ref={cadreRef} className='  h-96  z-30  flex cursor-pointer max-[840px]:hidden  '>
<div ref={el=>{if (imgRef.current) {
    imgRef.current[0]=el;
  }
  
}} className=' paysage  relative  top-20 h-60 w-80  -rotate-10   rounded-md shadow-2xl '>
 <Image
  src='/paysage1.jpg'
  alt='paysage'
 fill
     sizes="(max-width: 768px) 100vw, 320px"

 className=' object-cover border rounded-md'
  />
    </div>   
 
  <div ref={el=>{if (imgRef.current) {
      imgRef.current[1]=el;
  }
    
  }} className=' paysage  h-60 w-80  absolute   rotate-10 rounded-md shadow-2xl '>
 <Image
  src='/paysage2.jpg'
  alt='paysage'
 fill
  sizes="(max-width: 840px) 100vw, 33vw" 
  priority //
 className=' object-cover border rounded-md'
  />
    </div> 
   <div ref={el=>{if (imgRef.current) {
      imgRef.current[2]=el;
  }
    
   }} className=' paysage  h-60 w-80 absolute     bottom-40 rotate-5 rounded-md shadow-2xl '>
 <Image
  src='/rogner.webp'
  alt='paysage'
  fill
   sizes="(max-width: 840px) 100vw, 33vw" 
  priority //
 className=' object-cover border rounded-md'
  />
    </div>
</div>

   
</div>

 </div>

<h1  className='   bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-10   text-center  text-4xl uppercase font-black font-serif '>Redimensionner des images</h1>
<div className='  flex max-[840px]:flex-col   justify-center items-center  gap-20  '>
 <div  ref={el=>{if (visibleRef.current) {
      visibleRef.current[0]=el;
  }
    
   }}  className=' max-[840px]:flex-col   paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 max-[840px]:w-96 '>
  
  <Image
    src='/redimenssioner.png'
    alt='logo imagerie'
    fill
    sizes="(max-width: 840px) 100vw, 33vw" // adapté à la largeur réelle
    priority 
    className=' rounded-md object-cover  mx-auto'
  />
 </div>

  <div   ref={el=>{if (visibleRef.current) {
      visibleRef.current[1]=el;
  }
    
   }}  className=' h-[400px]   w-5/12  flex flex-col justify-around items-center text-center max-[840px]:w-full'>
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

<h2  className='   bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-32   text-center  text-4xl uppercase font-black font-serif '>compressez vos image</h2>
<div className='max-[840px]:flex-col  flex  justify-center items-center  gap-20  '>

  <div  ref={el=>{if (visibleRef2.current) {
      visibleRef2.current[0]=el;
  }
    
   }}  className=' max-[840px]:w-full  h-[400px]  w-5/12  flex flex-col justify-around items-center text-center'>
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


 <div  ref={el=>{if (visibleRef2.current) {
      visibleRef2.current[1]=el;
  }
    
   }} className=' max-[840px]:w-96 paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 '>
  
  <Image
    src='/compresser.png'
    alt='image de compression'
    fill
    sizes="(max-width: 840px) 100vw, 33vw" // adapté à la largeur réelle
    priority //
    className=' rounded-md  mx-auto'
  />
 </div>

</div>


{/* convertir */}
<h3  className='bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-32   text-center  text-4xl uppercase font-black font-serif '>convertissez vos images</h3>
<div className='max-[840px]:flex-col  flex  justify-center items-center  gap-20  '>


<div ref={el=>{if (convertirRef.current) {
      convertirRef.current[0]=el;
  }}}   className=' max-[840px]:w-96 paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 '>
  
  <Image
    src='/convert.webp'
    alt='image de compression'
    fill
    sizes="(max-width: 840px) 100vw, 33vw" // adapté à la largeur réelle
    priority //
    className=' rounded-md  mx-auto'
  />
</div>

<div 
  ref={el=>{if (convertirRef.current) {
      convertirRef.current[1]=el;
  }}} 
  className=' max-[840px]:w-full  h-[400px]  w-5/12  flex flex-col justify-around items-center text-center'>
   <strong className='text-2xl bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5 '>Convertissez vos images et  vos  photos</strong>
  <p className=' font-semibold'>
Vous pouvez choisir de conserver le ratio largeur/hauteur ou choisir des dimensions libres.
Le traitement par lot permet de redimensionner plusieurs images en même temps puis de les télécharger dans une archive ZIP.
  
  </p>
  <p className='font-semibold'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore adipisci ex corporis? Expedita nostrum itaque, perferendis esse qui molestiae?
  </p>
  <button className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Convertir</button>

</div>



</div>


{/*  rogner des images */}

<h4  className='bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-32   text-center  text-4xl uppercase font-black font-serif '>rognez vos images</h4>
<div className='max-[840px]:flex-col  flex  justify-center items-center  gap-20  '>

  <div 
  ref={el=>{if (rognerRef.current) {
      rognerRef.current[0]=el;
  }}}
  className=' max-[840px]:w-full  h-[400px]  w-5/12  flex flex-col justify-around items-center text-center'>
   <strong className='text-2xl bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5 '>Convertissez vos images et  vos  photos</strong>
  <p className=' font-semibold'>
Vous pouvez choisir de conserver le ratio largeur/hauteur ou choisir des dimensions libres.
Le traitement par lot permet de redimensionner plusieurs images en même temps puis de les télécharger dans une archive ZIP.
  
  </p>
  <p className='font-semibold'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore adipisci ex corporis? Expedita nostrum itaque, perferendis esse qui molestiae?
  </p>
  <button className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>Convertir</button>

  </div>
 
 <div
 ref={el=>{if (rognerRef.current) {
      rognerRef.current[1]=el;
  }}}
 className=' max-[840px]:w-96 paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 '>
  
  <Image
    src='/rogner.webp'
    alt='image de compression'
    fill
  
         sizes="(max-width: 768px) 100vw, 320px"

  priority //
    className=' rounded-md  mx-auto'
  />
 </div>

</div>

{/*  pivotez  des image */}

<h5  className='bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent my-32   text-center  text-4xl uppercase font-black font-serif '> pivotez vos images puis telechargez les </h5>
<div className='max-[840px]:flex-col  flex  justify-center items-center  gap-20  mb-40 '>

  <div
  ref={el=>{if (pivoterRef.current) {
      pivoterRef.current[0]=el;
  }}}
  className=' max-[840px]:w-full  h-[400px]  w-5/12  flex flex-col justify-around items-center text-center'>
   <strong className='text-2xl bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5 '>pivotez  vos images et  vos  photos</strong>
  <p className=' font-semibold'>
Vous pouvez choisir de conserver le ratio largeur/hauteur ou choisir des dimensions libres.
Le traitement par lot permet de redimensionner plusieurs images en même temps puis de les télécharger dans une archive ZIP.
  
  </p>
  <p className='font-semibold'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore adipisci ex corporis? Expedita nostrum itaque, perferendis esse qui molestiae?
  </p>
  <button className=' cursor-pointer hover:bg-cyan-500 transition-all  bg-cyan-600 text-white text-xl px-4 py-1 rounded-full'>pivotez vos images</button>

  </div>
 
 <div
 ref={el=>{if (pivoterRef.current) {
      pivoterRef.current[1]=el;
  }}}

 className=' max-[840px]:w-96 paysage top-10  relative rotate-6  h-[400px] rounded-md w-4/12 '>
  
  <Image
    src='/pivoter.webp'
    alt="image de  video pivoter "
    fill
    sizes="(max-width: 840px) 100vw, 33vw" // adapté à la largeur réelle
    priority //
    className=' rounded-md  mx-auto'
  />
 </div>

</div>





</div>
  </>
   

  );
};

export default Header;