import axios from 'axios'
import type { ApiResponse, User } from '@shared/types'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export const apiService = {
  // Health check
  checkHealth: () => axios.get('/health'),
  
  // Users endpoints
  getUsers: () => api.get<ApiResponse<User[]>>('/users'),
  getUser: (id: string) => api.get<ApiResponse<User>>(`/users/${id}`),
  createUser: (user: Omit<User, 'id'>) => api.post<ApiResponse<User>>('/users', user),
  
  // Test endpoint
  ping: () => api.get<ApiResponse<string>>('/ping')
}

export default api