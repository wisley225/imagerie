'use client';
import Image from 'next/image';
import { MdCompress } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { MdOutlineCropFree } from "react-icons/md";
import { MdOutlinePivotTableChart } from "react-icons/md";
import { PiResizeDuotone } from "react-icons/pi";
import Convert from './convert';
import Resize from './resize';
import Compresser from './compresser';
import { useState} from 'react';
import Rogner from './rogner';
import Pivoter from './pivoter';
import { useRouter } from 'next/navigation';
const Page = () => {

const [traitement, setTraitement] = useState<string | null>(null);
  const router = useRouter();


const handleClicklogo=()=>{
  router.push('/accueil');
}
const handleTraitement = (type: string) => {
    setTraitement(type);
    
}



    return (
        <div>
      <div onClick={handleClicklogo} className='relative w-40 h-20 cursor-pointer '>
                  <Image
                  src='/logoImagerie.png'
                  alt='logo imagerie'
                  fill
                  sizes="(max-width: 600px) 100vw, 15vw" // adapté à la largeur réelle du conteneur
                  className='object-cover object-center'
                  />
      </div>
      <h1 className='  bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent mb-5   text-center  text-4xl uppercase font-black font-serif '>telecharger vos imagesn et traitez les </h1>

<div className='  '>

    {

        traitement === "convertir" ? <Convert /> :
        traitement === "resize" ? <Resize /> :
        traitement === "compresser" ? <Compresser /> :
        traitement === "rogner" ? <Rogner /> : // Placeholder for cropping
        traitement === "pivoter" ? <Pivoter /> : // Placeholder for rotation
        

        <Resize/>
    }



<ul className=' w-1/2  max-[1160px]:w-96 max-[1160px]:grid-cols-2 gap-4  grid grid-cols-5 place-items-center m-auto my-5'>
   <li onClick={()=>handleTraitement("resize")} className=' border flex flex-col justify-center  items-center size-28 cursor-pointer rounded-2xl transition-all hover:text-white 
   bg-gradient-to-r   hover:from-cyan-600 hover:to-teal-400 hover:via-cyan-600 text-cyan-600 shadow-xl  hover:shadow-teal-400  active:scale-90 '> <PiResizeDuotone className='text-xl mb-2  ' /> <span className=' '>Redimension</span> </li>
   <li onClick={()=>handleTraitement("compresser")} className=' border flex flex-col justify-center  items-center size-28 cursor-pointer rounded-2xl transition-all hover:text-white 
   bg-gradient-to-r   hover:from-cyan-600 hover:to-teal-400 hover:via-cyan-600 text-cyan-600 shadow-xl  hover:shadow-teal-400 active:scale-90 '> <MdCompress className='text-xl mb-2  ' /> <span >Compresser</span> </li>
   <li onClick={()=>handleTraitement("convertir")} className='border flex flex-col justify-center  items-center size-28 cursor-pointer rounded-2xl transition-all hover:text-white 
   bg-gradient-to-r   hover:from-cyan-600 hover:to-teal-400 hover:via-cyan-600 text-cyan-600 shadow-xl  hover:shadow-teal-400  active:scale-90 '> <SiConvertio className='text-xl mb-2  ' /> <span>Convertir</span> </li>
   <li onClick={()=>handleTraitement("rogner")} className='border flex flex-col justify-center  items-center size-28 cursor-pointer rounded-2xl transition-all hover:text-white 
   bg-gradient-to-r   hover:from-cyan-600 hover:to-teal-400 hover:via-cyan-600 text-cyan-600 shadow-xl  hover:shadow-teal-400  active:scale-90 '> <MdOutlineCropFree className='text-xl mb-2  ' /> <span>Rogner</span>  </li>
   <li onClick={()=>handleTraitement("pivoter")} className='border flex flex-col justify-center  items-center size-28 cursor-pointer rounded-2xl transition-all hover:text-white 
   bg-gradient-to-r   hover:from-cyan-600 hover:to-teal-400 hover:via-cyan-600 text-cyan-600 shadow-xl  hover:shadow-teal-400 active:scale-90 '> <MdOutlinePivotTableChart className='text-xl mb-2  ' /> <span>Pivoter</span></li>
</ul>
</div>
        </div>
    );
}

export default Page;
