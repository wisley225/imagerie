'use client'
import React, { useState, useEffect  } from 'react';
import axios from 'axios'

const Page = () => {
const [fichier,setFichier]=useState<File|null>(null)
const [format,setFormat]=useState('jpeg');
const [blob,setBlob]=useState<Blob|null>(null)
const [blobUrl,setBlobUrl]=useState<string|null>(null)


const handleFileChange= (e: React.ChangeEvent<HTMLInputElement>)=>{

    if (e.target.files && e.target.files.length>0) {
       setFichier(e.target.files[0]) 
    }

}

const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

if (!fichier) return

const formData=new FormData()

formData.append('fichier',fichier);
formData.append('fichier',format);

 for(let [key, value] of formData.entries()) {
        console.log(key, value);
    }

try {
    const response=await axios.post('/api/convert', formData , {responseType:'blob'})
      console.log(response.data)
    setBlob(response.data)

} catch (error) {
    console.error('erreur lors de la conversion',error)
}


}


    useEffect(() => {
        if (blob){
            const url = URL.createObjectURL(blob);
            setBlobUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [blob]);



    return (
        <div>
             <form action="" onSubmit={e=>handleSubmit(e)} className='m-5'>
<input type="file" onChange={(e)=>handleFileChange(e)}  />
<select value={format} onChange={ e=>setFormat(e.target.value)}>
    <option value="jpeg">JPEG</option>
    <option value="png">PNG</option>
    <option value="webp">WEBP</option>
</select>
<button type='submit' className='ml-2 px-4 py-2 bg-blue-600 text-white rounded'>Convertir</button>

       </form>
      
            {blobUrl && (
                <a
                    href={blobUrl}
                    download={`Image-convertie.${format}`}
                    className="m-5 inline-block px-4 py-2 bg-green-600 text-white rounded"
                >
                    Télécharger l'image convertie
                </a>
            )}
        </div>
    );
}

export default Page;
