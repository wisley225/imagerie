'use client'
import React, { useState,useEffect } from 'react';

import axios from 'axios'
const [fichier,setFichier]=useState<File|null>(null);
const [blob,setBlob]=useState<Blob|null>()
const [blobUrl,setBlogUrl]=useState<string|null>(null)
const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    if (e.target.files && e.target.files.length) {
        setFichier(e.target.files[0])
    }

}


const handleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (!fichier) {
        return
    }
 const formData = new FormData
  formData.append('fichier',fichier)
  for(let [key, value] of formData.entries()) {
        console.log(key, value);
    }

const response = await axios.post('/api/compresser', formData, { responseType: 'blob' });
console.log(response);

setBlob(response.data)

}

useEffect(()=>{
if (blob) {
    const url = URL.createObjectURL(blob);
    setBlogUrl(url)
}
},[blob])




const Page = () => {
    return (
        <div>
              <form onSubmit={(e)=>handleSubmit(e)}>
         <input onChange={(e)=>handleFileChange(e)} type="file" />
        <button type='submit' className=' cursor-pointer'>compresser</button>
     </form>

     { blobUrl &&(
        <a 
        href={blobUrl}
        download={'Image-compresse.jpg'}
        > telecharger l'image compresser</a>
     ) }

        </div>
    );
}

export default Page;
