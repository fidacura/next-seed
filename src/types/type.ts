// src/types/type.ts
// basic shared types the app

// common component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// user-type
export interface User {
  id: string | number;
  name: string;
  email: string;
}

// API response-wrapper
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// route params
export interface RouteParams {
  [key: string]: string;
}