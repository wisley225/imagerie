import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// On prépare multer pour stocker les fichiers dans un dossier temporaire
const upload = multer({ dest: '/tmp' });

// On wrap multer dans une promesse pour le faire fonctionner avec Next.js (car NextRequest n'est pas compatible express)
function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}


export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const fichier = formData.get('fichier') as File;

  if (!fichier) {
    return NextResponse.json({ error:'Aucun fichier fourni'}, { status: 400 });
  }

  const arrayBuffer = await fichier.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  try {
    // Compression de l'image directement en mémoire avec sharp
    const compressedBuffer = await sharp(buffer)
      .jpeg({ quality: 60 })
      .toBuffer();
    return new NextResponse(compressedBuffer,{
      status:200,
      headers:{'Content-Type':'image/jpeg',},
   
    },);
  } catch (err) {
    console.error('Erreur de compression',err);
    return NextResponse.json({ error: 'Erreur lors de la compression'}, { status: 500 });
  }
}
