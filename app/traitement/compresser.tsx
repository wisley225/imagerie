'use client'
import { useState,useEffect ,useRef} from 'react';
import axios from 'axios'
import Image from 'next/image';
const Compresser = () => {

const [fichier,setFichier]=useState<File|null>(null);
const [blob,setBlob]=useState<Blob|null>()
const [blobUrl,setBlogUrl]=useState<string|null>(null)
const [selectFile,SetSelectFIle]=useState(false)

const  selectFileRef = useRef<HTMLInputElement>(null)

const handleClick=()=>{
    selectFileRef.current?.click()
}
const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    if (e.target.files && e.target.files.length) {
        setFichier(e.target.files[0])
        SetSelectFIle(true)
    }

}


const handleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (!fichier) {
        return
    }
 const formData = new FormData
  formData.append('fichier',fichier)
const response = await axios.post('/api/compresser', formData, { responseType: 'blob' });
setBlob(response.data)

}

useEffect(()=>{
if (blob) {
    const url = URL.createObjectURL(blob);
    setBlogUrl(url)
    SetSelectFIle(false) 
}
},[blob])




    return (
        <div>




<div className='  flex flex-col items-center justify-center'>
               <form  onSubmit={(e)=>handleSubmit(e)} className="m-5">
              <h1 className='  text-center mb-3 bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent'> cliquez sur le dessin et selectionnez vos images</h1>
            <input className=' hidden  ' ref={selectFileRef} type="file" onChange={(e)=>handleFileChange(e)} />
      
       <div  onClick={handleClick} className='hover:scale-95 transition-all active:scale-100  relative h-72 w-96 rounded-xl  m-auto mb-5 cursor-pointer shadow-lg  hover:shadow-cyan-100 '>
        <Image
        
            src={fichier ? URL.createObjectURL(fichier) : "/compress.jpg"}
            alt="Redimensionner une image"
            fill
            className=" rounded-xl   "
           onLoad={e => URL.revokeObjectURL((e.target as HTMLImageElement).src)}

        />
       </div>


        {
        
        selectFile &&
       <div className=' flex flex-col items-center'>
        <button type="submit" className="ml-2 px-4 py-2 bg-cyan-600 cursor-pointer hover:bg-cyan-500 active:scale-95 transition-all text-white rounded"> Compresser</button>

       </div> 
       
            }
        </form>
  {blobUrl && (
            <a
                href={blobUrl}
                download="Image-redimmensionné.jpg"
                className="m-5 inline-block  cursor-pointer px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded"
            >
                Télécharger l'image compressée
            </a>
        )}
        </div>
        </div>
    );
}

export default Compresser;
