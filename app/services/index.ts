import products from '@/data';

interface getProductsI {
  id?: number;
  query?: string | undefined;
  category?: string | null;
}
export async function getProducts(props: getProductsI) {
  const currentProduct = products.find((item) => item.id === props.id);
  return { data: currentProduct, success: true };
}
