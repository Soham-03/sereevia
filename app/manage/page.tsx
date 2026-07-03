'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string;
  packSize: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

type EditableImageSlot = {
  currentUrl: string | null;
  file: File | null;
  previewUrl: string | null;
  markedForDeletion: boolean;
};

type ProductFormState = {
  id?: string;
  name: string;
  category: string;
  description: string;
  ingredients: string;
  packSize: string;
  image: EditableImageSlot;
  image2: EditableImageSlot;
  image3: EditableImageSlot;
  image4: EditableImageSlot;
};

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin@123';

const IMAGE_KEYS = ['image', 'image2', 'image3', 'image4'] as const;
type ImageKey = (typeof IMAGE_KEYS)[number];

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '';

function emptyImageSlot(): EditableImageSlot {
  return {
    currentUrl: null,
    file: null,
    previewUrl: null,
    markedForDeletion: false,
  };
}

function createEmptyForm(): ProductFormState {
  return {
    name: '',
    category: '',
    description: '',
    ingredients: '',
    packSize: '',
    image: emptyImageSlot(),
    image2: emptyImageSlot(),
    image3: emptyImageSlot(),
    image4: emptyImageSlot(),
  };
}

function productToForm(product: Product): ProductFormState {
  return {
    id: product.id,
    name: product.name || '',
    category: product.category || '',
    description: product.description || '',
    ingredients: product.ingredients || '',
    packSize: product.packSize || '',
    image: {
      currentUrl: product.image || null,
      file: null,
      previewUrl: null,
      markedForDeletion: false,
    },
    image2: {
      currentUrl: product.image2 || null,
      file: null,
      previewUrl: null,
      markedForDeletion: false,
    },
    image3: {
      currentUrl: product.image3 || null,
      file: null,
      previewUrl: null,
      markedForDeletion: false,
    },
    image4: {
      currentUrl: product.image4 || null,
      file: null,
      previewUrl: null,
      markedForDeletion: false,
    },
  };
}

function getImagePreview(slot: EditableImageSlot) {
  if (slot.markedForDeletion) return null;
  return slot.previewUrl || slot.currentUrl || null;
}

async function uploadToCloudinary(file: File) {
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    throw new Error(
      'Missing Cloudinary env vars: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET'
    );
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || 'Failed to upload image');
  }

  return data.secure_url as string;
}

export default function ManagePage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<ProductFormState>(createEmptyForm());
  const [search, setSearch] = useState('');

  const [loadingProducts, setLoadingProducts] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  async function loadProducts() {
    setLoadingProducts(true);
    setError('');
    try {
      const snapshot = await getDocs(collection(db, 'products'));
      const items = snapshot.docs.map((d) => {
        const data = d.data() as Omit<Product, 'id'>;
        return {
          id: d.id,
          ...data,
        } as Product;
      });

      items.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      setProducts(items);

      if (items.length > 0 && !selectedId) {
        setSelectedId(items[0].id);
        setForm(productToForm(items[0]));
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to load products');
    } finally {
      setLoadingProducts(false);
    }
  }

  useEffect(() => {
    if (isAuthed) {
      loadProducts();
    }
  }, [isAuthed]);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => {
      return (
        p.name?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    });
  }, [products, search]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');

    if (loginUsername === ADMIN_USERNAME && loginPassword === ADMIN_PASSWORD) {
      setIsAuthed(true);
      setLoginUsername('');
      setLoginPassword('');
      return;
    }

    setLoginError('Invalid username or password');
  }

  function handleLogout() {
    setIsAuthed(false);
    setProducts([]);
    setSelectedId(null);
    setForm(createEmptyForm());
    setStatus('');
    setError('');
  }

  function selectProduct(product: Product) {
    setSelectedId(product.id);
    setForm(productToForm(product));
    setStatus('');
    setError('');
  }

  function handleCreateNew() {
    setSelectedId(null);
    setForm(createEmptyForm());
    setStatus('');
    setError('');
  }

  function updateField<K extends keyof ProductFormState>(key: K, value: ProductFormState[K]) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleImageSelect(key: ImageKey, file: File | null) {
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setForm((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        file,
        previewUrl,
        markedForDeletion: false,
      },
    }));
  }

  function handleImageRemove(key: ImageKey) {
    setForm((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        file: null,
        previewUrl: null,
        markedForDeletion: true,
      },
    }));
  }

  function handleImageReset(key: ImageKey) {
    setForm((prev) => ({
      ...prev,
      [key]: {
        currentUrl: prev[key].currentUrl,
        file: null,
        previewUrl: null,
        markedForDeletion: false,
      },
    }));
  }

  async function buildImagePayload(original?: Product | null) {
    const payload: Record<ImageKey, string> = {
      image: '',
      image2: '',
      image3: '',
      image4: '',
    };

    for (const key of IMAGE_KEYS) {
      const slot = form[key];
      const existingUrl = original?.[key] || '';

      if (slot.file) {
        payload[key] = await uploadToCloudinary(slot.file);
        continue;
      }

      if (slot.markedForDeletion) {
        payload[key] = '';
        continue;
      }

      payload[key] = existingUrl || '';
    }

    return payload;
  }

  async function handleSave() {
    setSaving(true);
    setStatus('');
    setError('');

    try {
      if (!form.name.trim()) {
        throw new Error('Product name is required');
      }

      const original = form.id
        ? products.find((p) => p.id === form.id) || null
        : null;

      const imagePayload = await buildImagePayload(original);

      const payload = {
        name: form.name.trim(),
        category: form.category.trim(),
        description: form.description.trim(),
        ingredients: form.ingredients.trim(),
        packSize: form.packSize.trim(),
        image: imagePayload.image || '',
        image2: imagePayload.image2 || '',
        image3: imagePayload.image3 || '',
        image4: imagePayload.image4 || '',
      };

      if (form.id) {
        await updateDoc(doc(db, 'products', form.id), payload);
      } else {
        const ref = await addDoc(collection(db, 'products'), payload);
        setSelectedId(ref.id);
      }

      const snapshot = await getDocs(collection(db, 'products'));
      const items = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Product, 'id'>),
      })) as Product[];

      items.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      setProducts(items);

      const activeId = form.id || selectedId;
      if (form.id) {
        const updated = items.find((item) => item.id === form.id);
        if (updated) {
          setSelectedId(updated.id);
          setForm(productToForm(updated));
        }
      } else {
        const created = items.find(
          (item) =>
            item.name === payload.name &&
            item.category === payload.category &&
            item.packSize === payload.packSize
        );
        if (created) {
          setSelectedId(created.id);
          setForm(productToForm(created));
        } else {
          setForm(createEmptyForm());
        }
      }

      setStatus('Product saved successfully');
    } catch (err: any) {
      setError(err?.message || 'Failed to save product');
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteProduct() {
    if (!form.id) {
      setForm(createEmptyForm());
      setSelectedId(null);
      return;
    }

    const confirmed = window.confirm('Delete this product? This cannot be undone.');
    if (!confirmed) return;

    setDeleting(true);
    setStatus('');
    setError('');

    try {
      await deleteDoc(doc(db, 'products', form.id));

      const remaining = products.filter((p) => p.id !== form.id);
      setProducts(remaining);

      if (remaining.length > 0) {
        setSelectedId(remaining[0].id);
        setForm(productToForm(remaining[0]));
      } else {
        setSelectedId(null);
        setForm(createEmptyForm());
      }

      setStatus('Product deleted successfully');
    } catch (err: any) {
      setError(err?.message || 'Failed to delete product');
    } finally {
      setDeleting(false);
    }
  }

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-stone-50 px-4 py-10 text-stone-900">
        <div className="mx-auto max-w-md">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
                Sereevia Admin
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
                Manage products
              </h1>
              <p className="mt-2 text-sm text-stone-500">
                Sign in to add, update, and delete products.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Username</label>
                <input
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                  placeholder="Enter username"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                  placeholder="Enter password"
                />
              </div>

              {loginError ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {loginError}
                </div>
              ) : null}

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-teal-700 px-5 text-sm font-medium text-white transition hover:bg-teal-800"
              >
                Sign in
              </button>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-500">
                Temporary credentials: admin / admin@123
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              Admin panel
            </p>
            <h1 className="text-2xl font-semibold tracking-tight">Product management</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCreateNew}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              New product
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-stone-900 px-4 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:px-8">
        <aside className="rounded-3xl border border-stone-200 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Products</h2>
              <p className="text-sm text-stone-500">{products.length} total items</p>
            </div>
          </div>

          <div className="mb-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="h-12 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
            />
          </div>

          <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-1">
            {loadingProducts ? (
              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-6 text-sm text-stone-500">
                Loading products...
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 px-4 py-8 text-sm text-stone-500">
                No products found.
              </div>
            ) : (
              filteredProducts.map((product) => {
                const active = selectedId === product.id;
                return (
                  <button
                    key={product.id}
                    onClick={() => selectProduct(product)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      active
                        ? 'border-teal-700 bg-teal-50'
                        : 'border-stone-200 bg-white hover:bg-stone-50'
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="line-clamp-1 text-sm font-semibold text-stone-900">
                        {product.name || 'Untitled product'}
                      </h3>
                      <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-stone-600">
                        {product.category || 'No category'}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm text-stone-500">
                      {product.description || 'No description added yet.'}
                    </p>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        <section className="space-y-6">
          {(status || error) && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                error
                  ? 'border-rose-200 bg-rose-50 text-rose-700'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-700'
              }`}
            >
              {error || status}
            </div>
          )}

          <div className="rounded-3xl border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="border-b border-stone-200 px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Product editor
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {form.id ? 'Edit product' : 'Create product'}
                  </h2>
                </div>
                <div className="text-sm text-stone-500">
                  Changes apply only after you click save.
                </div>
              </div>
            </div>

            <div className="space-y-8 px-5 py-6 sm:px-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Product name</label>
                  <input
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="h-12 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Category</label>
                  <input
                    value={form.category}
                    onChange={(e) => updateField('category', e.target.value)}
                    className="h-12 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                    placeholder="Enter category"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">Pack size</label>
                  <input
                    value={form.packSize}
                    onChange={(e) => updateField('packSize', e.target.value)}
                    className="h-12 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                    placeholder="Ex. 100 ml / 60 capsules"
                  />
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Product ID
                  </p>
                  <p className="mt-1 break-all text-sm text-stone-700">
                    {form.id || 'New product will get an auto-generated ID'}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="min-h-[140px] w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                  placeholder="Write product description"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">Ingredients</label>
                <textarea
                  value={form.ingredients}
                  onChange={(e) => updateField('ingredients', e.target.value)}
                  className="min-h-[140px] w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none placeholder:text-stone-400 focus:border-teal-600"
                  placeholder="Write ingredients"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-stone-700">Images</p>
                  <p className="mt-1 text-sm text-stone-500">
                    Works with your current Firestore string fields: image, image2, image3, image4.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {IMAGE_KEYS.map((key, index) => {
                    const slot = form[key];
                    const preview = getImagePreview(slot);

                    return (
                      <div
                        key={key}
                        className="rounded-3xl border border-stone-200 bg-stone-50 p-4"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div>
                            <h3 className="text-sm font-semibold text-stone-900">
                              {index === 0 ? 'Cover image' : `Image ${index + 1}`}
                            </h3>
                            <p className="text-xs text-stone-500">
                              Firestore field: <span className="font-medium">{key}</span>
                            </p>
                          </div>

                          <div className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-stone-600">
                            {slot.file
                              ? 'New file'
                              : slot.markedForDeletion
                              ? 'Marked delete'
                              : slot.currentUrl
                              ? 'Existing'
                              : 'Empty'}
                          </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                          {preview ? (
                            <img
                              src={preview}
                              alt={`${key} preview`}
                              className="h-56 w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-56 items-center justify-center bg-stone-100 text-sm text-stone-400">
                              No image selected
                            </div>
                          )}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <label className="inline-flex cursor-pointer items-center justify-center rounded-2xl bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800">
                            {slot.currentUrl || slot.file ? 'Replace image' : 'Upload image'}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) =>
                                handleImageSelect(key, e.target.files?.[0] || null)
                              }
                            />
                          </label>

                          <button
                            type="button"
                            onClick={() => handleImageRemove(key)}
                            className="inline-flex items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                          >
                            Remove
                          </button>

                          <button
                            type="button"
                            onClick={() => handleImageReset(key)}
                            className="inline-flex items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                          >
                            Reset
                          </button>
                        </div>

                        {slot.currentUrl ? (
                          <p className="mt-3 break-all text-xs text-stone-500">
                            Current URL: {slot.currentUrl}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 flex flex-col gap-3 rounded-b-3xl border-t border-stone-200 bg-white/95 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="text-sm text-stone-500">
                Review all changes, then save once.
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (form.id) {
                      const original = products.find((p) => p.id === form.id);
                      if (original) setForm(productToForm(original));
                    } else {
                      setForm(createEmptyForm());
                    }
                    setStatus('');
                    setError('');
                  }}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                >
                  Reset changes
                </button>

                <button
                  type="button"
                  onClick={handleDeleteProduct}
                  disabled={deleting}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 px-4 text-sm font-medium text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
                >
                  {deleting ? 'Deleting...' : 'Delete product'}
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-teal-700 px-5 text-sm font-medium text-white transition hover:bg-teal-800 disabled:opacity-60"
                >
                  {saving ? 'Saving...' : 'Save product'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}