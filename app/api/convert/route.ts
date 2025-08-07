import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fichier = formData.get('fichier') as File;
    const format = (formData.get('format') as string) || 'jpeg';

    if (!fichier) {
      return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 });
    }

    console.log('Fichier reçu:', fichier.name, fichier.type);
    console.log('Format demandé:', format);

    const arrayBuffer = await fichier.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let mime = 'image/jpeg';
    if (format === 'png') mime = 'image/png';
    else if (format === 'webp') mime = 'image/webp';
    else mime = 'image/jpeg';

    const convertedBuffer = await sharp(buffer)
      .toFormat(format as 'jpeg' | 'png' | 'webp')
      .toBuffer();

    return new NextResponse(convertedBuffer, {
      status: 200,
      headers: { 'Content-Type': mime },
    });
  } catch (err) {
    console.error('Erreur de conversion', err);
    return NextResponse.json({ error: 'Erreur lors du traitement' }, { status: 500 });
  }
}
