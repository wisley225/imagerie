 'use client'
 import { useEffect,useRef} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';    


const Page = () => {

  const router = useRouter();
const animationRef = useRef<(HTMLDivElement | null)[]>([]);



  useEffect(()=>{
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
  }, []);



   useEffect(()=>{
   const timer= setTimeout(()=>{
   router.push('/accueil')

 },5000)

 return ()=>clearTimeout(timer)
   },[router])


  return (
    <div className='h-screen flex items-center justify-center bg-white'>
      <div className='h-64 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between px-4 md:px-10'>
        <div className='relative flex flex-col items-center justify-center mb-8 md:mb-0'>
          <div className='border-2 rounded-xl border-blue-400 shadow-cyan-600 absolute animate-spin rotate-90 size-40 hidden sm:block' />
          <div className='border-2 rounded-xl shadow-cyan-600 absolute -scale-x-100 rotate-45 size-36 animate-spin hidden sm:block' />
          <Image alt='image' className='animate-pulse rounded-xl' height={120} width={120} src='/imageLoader.png' priority/>
        </div>
        <h1 className='animate-pulse mb-3 bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-400 via-cyan-600 text-transparent text-4xl sm:text-6xl md:text-8xl font-serif py-2 text-center'>Imagerie</h1>
      </div>
    </div>
  );
 }
 
 export default Page;
 