import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string;
  packSize: string;
  image: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
};

export async function getAllProducts(): Promise<Product[]> {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Product));
}

export async function getProductById(id: string): Promise<Product | null> {
  const ref = doc(db, 'products', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Product;
}