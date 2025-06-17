'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Page = () => {

    const [imgUrl, setImageUrl] = useState<string | null>(null);
      const imgRef = useRef<HTMLImageElement | null>(null);
      const visuelCanvasRef = useRef<HTMLCanvasElement | null>(null);
      const [crop, setCrop] = useState<Crop>({ unit: '%', x: 25, y: 25, width: 50, height: 50 });
      const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
      const [rotation, setRotation] = useState(0);
    
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
        <div>
              <h1>Recadrage d'image façon imgtools</h1>
      <input type="file" accept="image/*" onChange={onChangeFile} />

      {/* Slider de rotation */}
      {imgUrl && (
        <div className="flex items-center gap-4 my-4 justify-center">
          <label htmlFor="rotation">Rotation :</label>
          <input
            id="rotation"
            type="range"
            min={0}
            max={360}
            value={rotation}
            onChange={e => setRotation(Number(e.target.value))}
            style={{ width: 200 }}
          />
          <span>{rotation}°</span>
        </div>
      )}

      {imgUrl && (
        <div className='border border-red-600 w-1/2 m-auto'>
          <ReactCrop
            crop={crop}
            onChange={c => setCrop(c)}
            onComplete={c => setCompletedCrop(c)}
            aspect={undefined} // Cadre libre
            className='border-2 border-blue-500 size-full'
          >
            <img
              ref={imgRef}
              src={imgUrl}
              alt="Source"
              style={{ maxWidth: '100%' }}
              onLoad={e => onLoad(e.currentTarget)}
              className='border-4 size-full object-center'
            />
          </ReactCrop>
        </div>
      )}

      {completedCrop && (
        <>
          <h2 style={{ marginTop: '20px' }}>Aperçu du recadrage</h2>
          <canvas
            ref={visuelCanvasRef}
            style={{
              width: Math.round(completedCrop.width ?? 0),
              height: Math.round(completedCrop.height ?? 0),
              border: '1px solid black',
              marginTop: '10px'
            }}
          />
       

          <button onClick={handleCrop} className="px-4 py-2 bg-blue-500 text-white rounded">
            Rogner et appliquer la rotation
          </button>
        </>
      )}
        </div>
    );
}

export default Page;
