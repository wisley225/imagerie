'use client'
import React, { useState, useEffect  } from 'react';
import axios from 'axios'
import Image from 'next/image';
const Convert = () => {
const [fichier,setFichier]=useState<File|null>(null)
const [format,setFormat]=useState('jpeg');
const [blob,setBlob]=useState<Blob|null>(null)
const [blobUrl,setBlobUrl]=useState<string|null>(null)
const selectFileRef = React.useRef<HTMLInputElement>(null);
const [select,setSelectFile]=useState(false)



const handleClick=()=>{
    selectFileRef.current?.click();

}


const handleFileChange= (e: React.ChangeEvent<HTMLInputElement>)=>{

    if (e.target.files && e.target.files.length>0) {
       setFichier(e.target.files[0]) 
       setSelectFile(true);
    }

}

const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()

if (!fichier) return

const formData=new FormData()
formData.append('fichier',fichier);
formData.append('fichier',format);
try {
    const response=await axios.post('/api/convert', formData , {responseType:'blob'})
    setBlob(response.data)

} catch (error) {
    console.error('erreur lors de la conversion',error)
}


}


    useEffect(() => {
        if (blob){
            const url = URL.createObjectURL(blob);
            setBlobUrl(url);
            setSelectFile(false);
            return () => URL.revokeObjectURL(url);
        }
    }, [blob]);



    return (
        <div>
 <div className='  flex flex-col items-center justify-center'>
               <form  onSubmit={(e)=>handleSubmit(e)} className="m-5">
              <h1 className='  text-center mb-3 bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent'> cliquez sur le dessin et selectionnez vos images</h1>
            <input className=' hidden  ' ref={selectFileRef} type="file" onChange={(e)=>handleFileChange(e)} />
      
       <div  onClick={handleClick} className='hover:scale-95 transition-all active:scale-100  relative h-72 w-96 rounded-xl  m-auto mb-5 cursor-pointer shadow-lg  hover:shadow-cyan-100 '>
        <Image
        
            src="/convert.webp"
            alt="Redimensionner une image"
            fill
            className=" rounded-xl  object-cover "
        />
       </div>


        {
        
        select &&
<div className=' text-center'>
<select value={format} onChange={ e=>setFormat(e.target.value)}>
    <option value="jpeg">JPEG</option>
    <option value="png">PNG</option>
    <option value="webp">WEBP</option>
</select>
<button type='submit' className='ml-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 cursor-pointer text-white rounded'>Convertir</button>
 
</div>

   
 } 
        </form>
  {blobUrl && (
            <a
                href={blobUrl}
                download="Image-redimmensionné.jpg"
                className="m-5 inline-block  cursor-pointer px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded"
            >
                Télécharger l'image traitée
            </a>
        )}
        </div>



{/*             
             <form action="" onSubmit={e=>handleSubmit(e)} className='m-5'>
<input type="file" onChange={(e)=>handleFileChange(e)}  />
<select value={format} onChange={ e=>setFormat(e.target.value)}>
    <option value="jpeg">JPEG</option>
    <option value="png">PNG</option>
    <option value="webp">WEBP</option>
</select>

       </form>
      
            {blobUrl && (
                <a
                    href={blobUrl}
                    download={`Image-convertie.${format}`}
                    className="m-5 inline-block px-4 py-2 bg-green-600 text-white rounded"
                >
                    Télécharger l'image convertie
                </a>
            )} */}
        </div>
    );
}

export default Convert;
