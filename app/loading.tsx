 'use client'
 import { useEffect,useRef} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';    


const Page = () => {

  const router = useRouter();
const animationRef = useRef<(HTMLDivElement | null)[]>([]);



  const ctx=gsap.context(()=>{
    if (animationRef.current[0]) {
      gsap.to(
        animationRef.current[0],
        {
          duration: 2,
          rotate: 360,
          stagger: 1,
          transitions: "1s ",
          repeat: -1,
          ease: "linear",
        }
      );
    }
    if (animationRef.current[1]) {
      gsap.to(
        animationRef.current[1],
        {
          rotate: -360,
          stagger: 1,
          transitions: "1s ",
          repeat: -1,
          ease: "linear",
        }
      );
    }
  });



   useEffect(()=>{
   const timer= setTimeout(()=>{
   router.push('/accueil')

 },5000)

 return ()=>clearTimeout(timer)
   },[])


  return (
    <div className='  h-screen   flex items-center justify-center '>

      <div className=' h-64 flex items-center  justify-between '>
  <div className=''>
        <div  className='border-2 rounded-xl border-blue-400  shadow-cyan-600 absolute  animate-spin rotate-90  size-40' />
       <div  className=' border-2 rounded-xl   shadow-cyan-600 absolute -scale-x-100   rotate-45 size-36 animate-spin' />
       <Image alt=' image ' className=' animate-pulse ' height={150} width={150} src='/imageLoader.png' priority/>
      </div>
     <h1 className='  animate-pulse  mb-3 bg-clip-text  bg-gradient-to-r 
       from-cyan-600 to-teal-400 via-cyan-600   text-transparent text-8xl  font-serif '> Imagerie</h1>
    
       
      </div>
     
    </div>
  );
 }
 
 export default Page;
 