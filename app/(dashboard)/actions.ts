'use server';

import { deleteProductById } from '@/lib/db';

export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get('id'));
  await deleteProductById(id);
}
