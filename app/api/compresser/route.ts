import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import sharp from 'sharp';


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
