import { User } from "../types/types";


const API_URL = 'http://localhost:3000/us';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar usuários');
  }
  const data: User[] = await response.json();
  return data;
};

export const validateUser = (users: User[], email: string, password: string): User | null => {
  return users.find(user => user.email_usuario === email && user.senha_usuario === password) || null;
};
