import axios from 'axios';
import type { LoginCredentials, SignupData, AuthResponse } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: (credentials: LoginCredentials) => 
    api.post<AuthResponse>('/auth/login', credentials),
  signup: (data: SignupData) => 
    api.post<AuthResponse>('/auth/signup', data),
  getMe: () => 
    api.get<AuthResponse>('/auth/me'),
};

export default api;