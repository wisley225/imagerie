'use client'

import React from 'react';
import axios from 'axios';
import { useState,useEffect,useRef } from 'react';
import Image from 'next/image';

const Resize = () => {

const [fichier,setFichier]=useState<File|null>(null)
const [width,setWidth]=useState('')
const [height,setHeight]=useState('')
const [blob,setBlob]=useState<Blob|null>(null)
const [blobUrl,setBlobUrl]=useState<string|null>(null)
const selectFileRef = useRef<HTMLInputElement>(null)
const [select,setSelect]=useState(false)

const handleClick=()=>{
    selectFileRef.current?.click()
}
const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
if (e.target.files && e.target.files.length>0) {
     setFichier(e.target.files[0]);
     setSelect(true);
}
}

const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
if (!fichier) return

const formData=new FormData();
formData.append('fichier',fichier);
width && formData.append('width',width)
height && formData.append('height',height)

  for(let [key, value] of formData.entries()) {
        console.log(key, value);
    }

 try {
 const response= await axios.post('/api/resize',formData,{responseType:'blob'})
 setBlob(response.data)
 console.log(response)
     } catch (error) {
       console.error("erreur lors de l'envoie",error)
 }



}
 useEffect(() => {
    if (blob) {
    const url=URL.createObjectURL(blob) 
    setBlobUrl(url);
    return ()=> URL.revokeObjectURL(url)
    }  
  
 }, [blob]);

    return (
        <div className='  flex flex-col items-center justify-center'>
               <form  onSubmit={(e)=>handleSubmit(e)} className="m-5">
              <h1 className='  text-center mb-3 bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent'> cliquez sur le dessin et selectionnez vos images</h1>
            <input className=' hidden  ' ref={selectFileRef} type="file" onChange={(e)=>handleFileChange(e)} />
      
       <div  onClick={handleClick} className='hover:scale-95 transition-all active:scale-100  relative h-72 w-96 rounded-xl  m-auto mb-5 cursor-pointer shadow-lg  hover:shadow-cyan-100 '>
        <Image
        
            src="/resize.webp"
            alt="Redimensionner une image"
            fill
            className=" rounded-xl  object-cover "
        />
       </div>


        {
        
        select &&
       <div className=' flex flex-col items-center'>

        <div className=' mb-5 place-items-center'>
 <input
                type="number"
                placeholder="Largeur (px)"
                value={width}
                onChange={e => setWidth(e.target.value)}
                className="ml-2 outline-1 outline-cyan-600 rounded-md "
            />
            <input
                type="number"
                placeholder="Hauteur (px)"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="ml-2 pl-2 outline-1 rounded-md outline-cyan-600"
            />
        </div>


        <button type="submit" className="ml-2 px-4 py-2 bg-cyan-600 cursor-pointer hover:bg-cyan-500 active:scale-95 transition-all text-white rounded"> Redimensionner</button>

       </div> 
       
            }
        </form>
  {blobUrl && (
            <a
                href={blobUrl}
                download="Image-redimmensionné.jpg"
                className="m-5 inline-block  cursor-pointer px-4 py-2 bg-green-600 text-white rounded"
            >
                Télécharger l'image traitée
            </a>
        )}
        </div>
    );
}

export default Resize;




































































































