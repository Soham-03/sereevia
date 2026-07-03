import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import cloudinary from '@/lib/cloudinary';

type Params = { params: Promise<{ id: string }> };

export async function GET(_: NextRequest, { params }: Params) {
  const { id } = await params;
  const ref = doc(db, 'products', id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ id: snap.id, ...snap.data() });
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await req.json();
  const ref = doc(db, 'products', id);
  const existingSnap = await getDoc(ref);

  if (!existingSnap.exists()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const existing = existingSnap.data();

  await updateDoc(ref, {
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
    updatedAt: serverTimestamp(),
  });

  if (
    existing.imagePublicId &&
    body.previousImagePublicId &&
    existing.imagePublicId === body.previousImagePublicId &&
    body.imagePublicId &&
    body.imagePublicId !== body.previousImagePublicId
  ) {
    await cloudinary.uploader.destroy(body.previousImagePublicId, {
      resource_type: existing.imageResourceType || 'image',
    });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(_: NextRequest, { params }: Params) {
  const { id } = await params;
  const ref = doc(db, 'products', id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const data = snap.data();

  if (data.imagePublicId) {
    await cloudinary.uploader.destroy(data.imagePublicId, {
      resource_type: data.imageResourceType || 'image',
    });
  }

  await deleteDoc(ref);

  return NextResponse.json({ ok: true });
}