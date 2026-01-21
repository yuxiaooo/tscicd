// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// User entity
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

// User creation payload (without id)
export type CreateUserRequest = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

// User update payload (partial)
export type UpdateUserRequest = Partial<CreateUserRequest>;

// Health check response
export interface HealthCheckResponse {
  success: boolean;
  message: string;
  timestamp: string;
  uptime: number;
  environment: string;
}

// Common HTTP status codes
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

// API endpoints
export const API_ENDPOINTS = {
  HEALTH: '/health',
  USERS: '/api/users',
  PING: '/api/ping'
} as const;

// Environment types
export type Environment = 'development' | 'production' | 'test';

// Generic error type
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
}