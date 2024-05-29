import { Product } from "../types/types";


const apiUrl = 'https://api.example.com/products'; // Substitua pela URL da sua API

export const createProduct = async (product: Product) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (id: number, product: Product) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id: number) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const getProductById = async (id: number) => {
  const response = await fetch(`${apiUrl}/${id}`);
  return response.json();
};

export const getProducts = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};
