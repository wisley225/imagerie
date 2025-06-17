import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fichier = formData.get('fichier') as File;
    const x = parseInt(formData.get('x') as string, 10);
    const y = parseInt(formData.get('y') as string, 10);
    const width = parseInt(formData.get('width') as string, 10);
    const height = parseInt(formData.get('height') as string, 10);

    if (!fichier || isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height)) {
      return NextResponse.json({ error: 'Paramètres manquants ou invalides' }, { status: 400 });
    }

    const arrayBuffer = await fichier.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const croppedBuffer = await sharp(buffer)
      .extract({ left: x, top: y, width, height })
      .jpeg()
      .toBuffer();

    return new NextResponse(croppedBuffer, {
      status: 200,
      headers: { 'Content-Type': 'image/jpeg' },
    });
  } catch (err) {
    console.error('Erreur lors du rognage', err);
    return NextResponse.json({ error: 'Erreur lors du traitement' }, { status: 500 });
  }
}



















