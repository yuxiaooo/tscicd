import type { ApiResponse, AppError } from './types';

/**
 * Creates a standardized API response
 */
export function createApiResponse<T>(
  data: T,
  success: boolean = true,
  message?: string
): ApiResponse<T> {
  return {
    success,
    data,
    message
  };
}

/**
 * Creates an error API response
 */
export function createErrorResponse(
  message: string,
  error?: string
): ApiResponse<null> {
  return {
    success: false,
    data: null,
    message,
    error
  };
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates required fields
 */
export function validateRequired(
  obj: Record<string, unknown>,
  requiredFields: string[]
): AppError | null {
  const missingFields = requiredFields.filter(field => 
    !obj[field] || (typeof obj[field] === 'string' && !obj[field].toString().trim())
  );

  if (missingFields.length > 0) {
    return {
      code: 'VALIDATION_ERROR',
      message: `Missing required fields: ${missingFields.join(', ')}`,
      details: { missingFields }
    };
  }

  return null;
}

/**
 * Generates a simple UUID v4
 */
export function generateId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Formats date to ISO string
 */
export function formatDate(date: Date = new Date()): string {
  return date.toISOString();
}

/**
 * Sanitizes string input
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}