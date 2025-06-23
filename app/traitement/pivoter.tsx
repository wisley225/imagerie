
'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const Pivoter = () => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const selectFileRef = useRef<HTMLInputElement>(null)


const handleClick = () => {
    selectFileRef.current?.click();
}

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => setImgUrl(reader.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePivot = () => {
    setRotation(r => (r + 90) % 360);
  };

  const handleDownload = () => {
    if (!imgRef.current || !canvasRef.current) return;
    const image = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const angle = (rotation * Math.PI) / 180;
    const width = image.naturalWidth;
    const height = image.naturalHeight;

    // Adapter la taille du canvas selon la rotation
    if (rotation % 180 === 0) {
      canvas.width = width;
      canvas.height = height;
    } else {
      canvas.width = height;
      canvas.height = width;
    }

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);
    if (rotation % 180 === 0) {
      ctx.drawImage(image, -width / 2, -height / 2);
    } else {
      ctx.drawImage(image, -height / 2, -width / 2);
    }
    ctx.restore();

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'image-pivotee.png';
    link.href = url;
    link.click();
  };



    return (
        <div>
           <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold">Pivotage d'image</h2>
        <input type="file" className=' hidden' ref={selectFileRef} accept="image/*" onChange={onChangeFile} />



        {imgUrl ? (
          <>

        <button
              className="px-3 py-1 bg-gray-200 rounded"
              onClick={handlePivot}
              title="Pivoter de 90°"
            >
              ↻ Pivoter 90°
            </button>

          <div className="flex flex-col items-center justify-center gap-2  h-[400px]">
            <img
              ref={imgRef}
              src={imgUrl}
              alt="A pivoter"
              style={{
                maxWidth: 400,
                maxHeight: 400,
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.3s',
                border: '2px solid #007bff',
                borderRadius: 8,
                background: '#fff'
              }}
            />
          
          </div>

        
            <button
              className="px-3 py-1  bg-cyan-600  hover:bg-cyan-500 text-white rounded"
              onClick={handleDownload}
              title="Télécharger l'image pivotée"
            >
              Télécharger l'image pivotée
            </button>
        
            {/* <canvas ref={canvasRef} style={{ display: 'none' }} /> */}
          
       </> ) :  
              <div  onClick={handleClick} className='hover:scale-95 transition-all active:scale-100  relative h-72 w-96 rounded-xl  m-auto mb-5 cursor-pointer shadow-lg  hover:shadow-cyan-100 '>
               <Image
               
                   src="/pivoter.webp"
                   alt="Redimensionner une image"
                   fill
                   className=" rounded-xl  object-cover "
               />
              </div>}
      </div> 


      
        </div>
    );
}

export default Pivoter;
