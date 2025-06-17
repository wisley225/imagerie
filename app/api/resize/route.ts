import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fichier = formData.get('fichier') as File;
    const width = formData.get('width');
    const height = formData.get('height');

    if (!fichier) {
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 });
    }

    const arrayBuffer = await fichier.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let sharpInstance = sharp(buffer);

    // Si largeur ou hauteur fournie, on redimensionne
    if (width || height) {
      sharpInstance = sharpInstance.resize(
        width ? parseInt(width as string, 10) : undefined,
        height ? parseInt(height as string, 10) : undefined
      );
    }

    const compressedBuffer = await sharpInstance.jpeg({ quality: 60 }).toBuffer();

    return new NextResponse(compressedBuffer, {
      status: 200,
      headers: { 'Content-Type': 'image/jpeg' },
    });
  } catch (err) {
    console.error('Erreur de compression/redimensionnement', err);
    return NextResponse.json({ error: 'Erreur lors du traitement' }, { status: 500 });
  
}
}