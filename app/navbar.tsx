'use client'
import React from 'react';
import Image from 'next/image';
import { FaUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
import { useRef , useEffect ,useState} from 'react';
import gsap from 'gsap';

const Navbar = () => {
const menuRef=useRef<HTMLDivElement>(null);
const [openMenu, setOpenMenu] = useState(false);
const divBurger = useRef<Array<HTMLDivElement | null>>([]);
const listLi = useRef<(HTMLLIElement | null)[]>([]);
const ulNavRef = useRef<HTMLUListElement>(null);


useEffect(()=>{
if (menuRef.current, listLi.current, divBurger.current) {
     const ctx=gsap.context(()=>{


    let tl=gsap.timeline()

    openMenu ? (
tl.to(menuRef.current,{
        x:openMenu ?  -100: 0,
        duration: 0.5,
        ease: 'power2.inOut',

    })
    .to(divBurger.current[0],{
         x:10,
         duration: 0.1,
    })
      .to(divBurger.current[1],{
         x:15,
         duration: 0.1,
    })
      .to(divBurger.current[2],{
         x:20,
         duration: 0.1,
    })



  .to( ulNavRef.current,{
         clipPath:'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
         stagger:0.1,
         duration: 0.1,
     })


    ):
    (
        tl.from(menuRef.current,{
        x:-100,
        duration: 0.5,
        ease: 'power2.inOut',

    })
    .from(divBurger.current[0],{
         x:10,
         duration: 0.1,
    })
      .from(divBurger.current[1],{
         x:15,
         duration: 0.1,
    })
      .from(divBurger.current[2],{
         x:20,
         duration: 0.1,
    })




    )



})
  return () => ctx.revert();

}

},[openMenu]);

    return (
    <nav ref={ulNavRef}  className=' ulNavRef max-[1130px]:pb-5   bg-white flex  max-[1130px]:flex-col justify-around py-1 shadow-xl   rounded-b-xl  absolute z-30 w-full backdrop-brightness-125'>
    <div className=' flex items-center justify-between px-10'>
    <div className='relative w-40 h-20 '>
    <Image
    src='/logoImagerie.png'
    alt='logo imagerie'
    fill
    className='object-cover object-center'
    />
    </div>

     <div  className='min-[1130px]:hidden   cursor-pointer w-40 h-10 flex justify-end   ' >

   <div onClick={()=>setOpenMenu((prev)=>(!prev))} ref={menuRef} className=' flex flex-col justify-evenly '>
            <div ref={(el)=>{ if (divBurger.current) divBurger.current[0]=el }} className=' border w-10 h-2 bg-gradient-to-tr from-cyan-600 to-teal-400    via-teal-400 rounded-2xl  '/>
            <div ref={(el)=>{ if (divBurger.current) divBurger.current[1]=el }} className=' border w-10 h-2  bg-gradient-to-tr from-cyan-600 to-teal-400    via-teal-400 rounded-2xl '/>
            <div ref={(el)=>{ if (divBurger.current) divBurger.current[2]=el }} className=' border w-10 h-2  bg-gradient-to-tr from-cyan-600 to-teal-400    via-teal-400 rounded-2xl '/>
   </div>

      </div>

     </div>

    <ul   className=  '   max-[1130px]:font-serif max-[1130px]:items-start   max-[1130px]:flex-col   bg-clip-text text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400   via-cyan-600 font-semibold flex  items-center w-full justify-around uppercase'>
                <li ref={(el)=>{if (listLi.current)
                    listLi.current[0]=el;
                }}  className='  max-[1130px]:hover:ml-5  max-[1130px]:border border-b-cyan-600 max-[1130px]:w-full max-[1130px]:h-20
                max-[1130px]:items-center max-[1130px]:pl-5
                max-[1130px]:flex bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm  hover:brightness-75 cursor-pointer transition-all  '> accueil</li>
                <li ref={(el)=>{if (listLi.current)
                    listLi.current[1]=el;
                }} className='  max-[1130px]:hover:ml-5  max-[1130px]:border border-b-cyan-600 max-[1130px]:w-full max-[1130px]:h-20
                max-[1130px]:items-center max-[1130px]:pl-5
                max-[1130px]:flex bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all  '>traitemment</li>
                <li ref={(el)=>{if (listLi.current)
                    listLi.current[3]=el;
                }} className='  max-[1130px]:hover:ml-5  max-[1130px]:border border-b-cyan-600 max-[1130px]:w-full max-[1130px]:h-20
                max-[1130px]:items-center max-[1130px]:pl-5
                max-[1130px]:flex bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all  '>service</li>
                <li ref={(el)=>{if (listLi.current)
                    listLi.current[4]=el;
                }} className='  max-[1130px]:hover:ml-5  max-[1130px]:border border-b-cyan-600 max-[1130px]:w-full max-[1130px]:h-20
                max-[1130px]:items-center max-[1130px]:pl-5
                max-[1130px]:flex bg-clip-text bg text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all  '>contact</li>
                <li ref={(el)=>{if (listLi.current)
                    listLi.current[5]=el;
                }} className='  max-[1130px]:hover:ml-5  max-[1130px]:border border-b-cyan-600 max-[1130px]:w-full max-[1130px]:h-20
                max-[1130px]:items-center max-[1130px]:pl-5
                max-[1130px]:flex bg-clip-text  text-transparent bg-gradient-to-tr from-cyan-600 to-teal-400    via-cyan-600 text-sm hover:brightness-75 cursor-pointer transition-all  '> a propos</li>
    </ul>


        </nav>
    );
}

export default Navbar;























