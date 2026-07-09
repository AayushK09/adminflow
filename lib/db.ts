export type SelectProduct = {
  id: number;
  imageUrl: string;
  name: string;
  status: 'active' | 'inactive' | 'archived';
  price: string;
  stock: number;
  availableAt: Date;
};

export type SelectOrder = {
  id: number;
  productName: string;
  imageUrl: string;
  customer: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  price: string;
  orderedAt: Date;
};

const mockProducts: SelectProduct[] = [
  { id: 1, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp', name: 'Smartphone X Pro', status: 'active', price: '999.00', stock: 150, availableAt: new Date() },
  { id: 2, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp', name: 'Wireless Earbuds Ultra', status: 'active', price: '199.00', stock: 300, availableAt: new Date() },
  { id: 3, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp', name: 'Smart Home Hub', status: 'active', price: '149.00', stock: 200, availableAt: new Date() },
  { id: 4, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp', name: '4K Ultra HD Smart TV', status: 'active', price: '799.00', stock: 50, availableAt: new Date() },
  { id: 5, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp', name: 'Gaming Laptop Pro', status: 'active', price: '1299.00', stock: 75, availableAt: new Date() },
  { id: 6, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/headset-lYnRnpjDbZkB78lS7nnqEJFYFAUDg6.webp', name: 'VR Headset Plus', status: 'active', price: '349.00', stock: 120, availableAt: new Date() },
  { id: 7, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp', name: 'Smartwatch Elite', status: 'active', price: '249.00', stock: 250, availableAt: new Date() },
  { id: 8, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp', name: 'Bluetooth Speaker Max', status: 'active', price: '99.00', stock: 400, availableAt: new Date() },
  { id: 9, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp', name: 'Portable Charger Super', status: 'active', price: '59.00', stock: 500, availableAt: new Date() },
  { id: 10, imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp', name: 'Smart Thermostat Pro', status: 'active', price: '199.00', stock: 175, availableAt: new Date() }
];

const mockOrders: SelectOrder[] = [
  { id: 1, productName: 'Smartphone X Pro', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp', customer: 'Alice Johnson', status: 'delivered', price: '999.00', orderedAt: new Date('2024-01-10') },
  { id: 2, productName: 'Wireless Earbuds Ultra', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp', customer: 'Bob Smith', status: 'shipped', price: '199.00', orderedAt: new Date('2024-01-15') },
  { id: 3, productName: 'Smart Home Hub', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp', customer: 'Carol White', status: 'pending', price: '149.00', orderedAt: new Date('2024-01-18') },
  { id: 4, productName: '4K Ultra HD Smart TV', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp', customer: 'David Brown', status: 'delivered', price: '799.00', orderedAt: new Date('2024-01-20') },
  { id: 5, productName: 'Gaming Laptop Pro', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp', customer: 'Eva Green', status: 'shipped', price: '1299.00', orderedAt: new Date('2024-01-22') },
  { id: 6, productName: 'VR Headset Plus', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/headset-lYnRnpjDbZkB78lS7nnqEJFYFAUDg6.webp', customer: 'Frank Lee', status: 'cancelled', price: '349.00', orderedAt: new Date('2024-01-25') },
  { id: 7, productName: 'Smartwatch Elite', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp', customer: 'Grace Kim', status: 'delivered', price: '249.00', orderedAt: new Date('2024-01-28') },
  { id: 8, productName: 'Bluetooth Speaker Max', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp', customer: 'Henry Park', status: 'pending', price: '99.00', orderedAt: new Date('2024-02-01') },
  { id: 9, productName: 'Portable Charger Super', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp', customer: 'Isla Moore', status: 'shipped', price: '59.00', orderedAt: new Date('2024-02-03') },
  { id: 10, productName: 'Smart Thermostat Pro', imageUrl: 'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp', customer: 'Jack Taylor', status: 'delivered', price: '199.00', orderedAt: new Date('2024-02-05') }
];

export async function getProducts(
  search: string,
  offset: number
): Promise<{ products: SelectProduct[]; newOffset: number | null; totalProducts: number }> {
  const filtered = search
    ? mockProducts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : mockProducts;
  const page = filtered.slice(offset, offset + 5);
  return { products: page, newOffset: page.length >= 5 ? offset + 5 : null, totalProducts: filtered.length };
}

export async function deleteProductById(id: number) {
  const idx = mockProducts.findIndex((p) => p.id === id);
  if (idx !== -1) mockProducts.splice(idx, 1);
}

export async function getOrders(
  search: string,
  offset: number
): Promise<{ orders: SelectOrder[]; newOffset: number | null; totalOrders: number }> {
  const filtered = search
    ? mockOrders.filter((o) =>
        o.productName.toLowerCase().includes(search.toLowerCase()) ||
        o.customer.toLowerCase().includes(search.toLowerCase())
      )
    : mockOrders;
  const page = filtered.slice(offset, offset + 5);
  return { orders: page, newOffset: page.length >= 5 ? offset + 5 : null, totalOrders: filtered.length };
}
