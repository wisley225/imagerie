'use client'

import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Page = () => {

const [fichier,setFichier]=useState<File|null>(null)
const [width,setWidth]=useState('')
const [height,setHeight]=useState('')
const [blob,setBlob]=useState<Blob|null>(null)
const [blobUrl,setBlobUrl]=useState<string|null>(null)



const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
if (e.target.files && e.target.files.length>0) {
     setFichier(e.target.files[0]);
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
        <div>
               <form onSubmit={(e)=>handleSubmit(e)} className="m-5">
            <input type="file" onChange={(e)=>handleFileChange(e)} />
            <input
                type="number"
                placeholder="Largeur (px)"
                value={width}
                onChange={e => setWidth(e.target.value)}
                className="ml-2"
            />
            <input
                type="number"
                placeholder="Hauteur (px)"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="ml-2"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">Compresser & Redimensionner</button>
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

export default Page;




































































































