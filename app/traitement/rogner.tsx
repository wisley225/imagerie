'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Image from 'next/image';

const Rogner = () => {

    const [imgUrl, setImageUrl] = useState<string | null>(null);
      const imgRef = useRef<HTMLImageElement | null>(null);
      const visuelCanvasRef = useRef<HTMLCanvasElement | null>(null);
      const [crop, setCrop] = useState<Crop>({ unit: '%', x: 25, y: 25, width: 50, height: 50 });
      const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
      const [rotation, setRotation] = useState(0);
      const selectFileRef = useRef<HTMLInputElement>(null)
      const [select,setSelect]=useState(false)


      const handleClick = () => {
        selectFileRef.current?.click();
      };
    
      const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setCrop({ unit: '%', x: 25, y: 25, width: 50, height: 50 });
          const reader = new FileReader();
          reader.addEventListener('load', () => setImageUrl(reader.result as string));
          reader.readAsDataURL(e.target.files[0]);
        }
      };
    
      const onLoad = useCallback((img: HTMLImageElement) => {
        imgRef.current = img;
      }, []);
    
      const generatePreview = useCallback(
        (crop: Crop) => {
          if (!crop || !imgRef.current || !visuelCanvasRef.current) return;
          const image = imgRef.current;
          const canvas = visuelCanvasRef.current;
          const scaleX = image.naturalWidth / image.width;
          const scaleY = image.naturalHeight / image.height;
          const croppedWidth = crop.width! * scaleX;
          const croppedHeight = crop.height! * scaleY;
    
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
    
          canvas.width = croppedWidth;
          canvas.height = croppedHeight;
    
          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.translate(croppedWidth / 2, croppedHeight / 2);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.translate(-croppedWidth / 2, -croppedHeight / 2);
    
          ctx.drawImage(
            image,
            crop.x! * scaleX,
            crop.y! * scaleY,
            crop.width! * scaleX,
            crop.height! * scaleY,
            0,
            0,
            croppedWidth,
            croppedHeight
          );
          ctx.restore();
        },
        [rotation]
      );
    
      // Génère l'aperçu à chaque crop ou rotation
      useEffect(() => {
        if (completedCrop) {
          generatePreview(completedCrop);
        }
      }, [completedCrop, generatePreview, rotation]);
    
      // Fonction pour télécharger l'image recadrée et tournée
      const handleCrop = () => {
        if (!completedCrop || !imgRef.current || !visuelCanvasRef.current) return;
        const canvas = visuelCanvasRef.current;
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'image-recadree.png';
        link.href = url;
        link.click();
      };
    



    return (
        <div className=' '>
              <h1 className='  text-center mb-3 bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent text-2xl font-serif'>Rogner votre images</h1>
      <input className=' hidden' type="file"  ref={selectFileRef} accept="image/*" onChange={onChangeFile} />
         
             

      {/* Slider de rotation */}
      {imgUrl ? (

  <div className=' mb-5 '>
 <div className="flex items-center gap-4 my-4 justify-center ">
          <label htmlFor="rotation " className='bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent text-xl font-serif'>Rotation :</label>
          <input
            id="rotation"
            type="range"
            min={0}
            max={360}
            value={rotation}
            onChange={e => setRotation(Number(e.target.value))}
            style={{ width: 200 , border:" dotted 1px "}}
          />
          <span>{rotation}°</span>
 </div>
    
    <div className='max-[940px]:items-center  flex justify-around max-[940px]:flex-col '>
 <div className='max-[940px]:mb-10 flex  justify-center items-center w-1/2  rounded-md shadow-lg transition-all  border-8 border-cyan-600  '>
          <ReactCrop
            crop={crop}
            onChange={c => setCrop(c)}
            onComplete={c => setCompletedCrop(c)}
            aspect={undefined} // Cadre libre
            className='bg-cover rounded-md  '
          >
            <img
              ref={imgRef}
              src={imgUrl}
              alt="Source"
              style={{ maxWidth: '100%' }}
              onLoad={e => onLoad(e.currentTarget)}
              className='  object-center bg-cover  '
            />
          </ReactCrop>
        </div>

  <div className=' text-center  flex flex-col justify-center items-center '>
 {completedCrop && (
        <>
          <h2 className=' bg-clip-text  bg-gradient-to-r   from-cyan-600 to-teal-400 via-cyan-600   text-transparent text-xl font-serif' >Aperçu du recadrage</h2>
          <div className=' my-3    shadow-md ' >
              <canvas
            ref={visuelCanvasRef}
            style={{
              width: Math.round(completedCrop.width ?? 0),
              height: Math.round(completedCrop.height ?? 0),
               objectFit: 'cover',
               objectPosition: 'center',
             
            }}
          />
          </div>
      
       

          <button onClick={handleCrop} className=" m-auto px-4 py-2 bg-cyan-600 hover:bg-cyan-500 cursor-pointer text-white rounded">
            Rogner et appliquer la rotation
          </button>
        </>
      )}
  </div>

    </div>
       
  </div>

       
      ) :  <div  onClick={handleClick} className='hover:scale-95 transition-all active:scale-100  relative h-72 w-96 rounded-xl  m-auto mb-5 cursor-pointer shadow-lg  hover:shadow-cyan-100 '>
               <Image
               
                   src="/rogner.webp"
                   alt="Redimensionner une image"
                   fill
                   className=" rounded-xl  object-cover "
               />
              </div> }

     
        </div>
    );
}

export default Rogner;
