import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

export async function GET() {
  const snapshot = await getDocs(collection(db, 'products'));
  const products = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const docRef = await addDoc(collection(db, 'products'), {
    name: body.name,
    category: body.category,
    description: body.description,
    ingredients: body.ingredients,
    packSize: body.packSize,
    image: body.image || '',
    imagePublicId: body.imagePublicId || '',
    imageResourceType: body.imageResourceType || 'image',
    image2: body.image2 || '',
    image2PublicId: body.image2PublicId || '',
    image3: body.image3 || '',
    image3PublicId: body.image3PublicId || '',
    image4: body.image4 || '',
    image4PublicId: body.image4PublicId || '',
    image5: body.image5 || '',
    image5PublicId: body.image5PublicId || '',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return NextResponse.json({ id: docRef.id, ok: true });
}