export interface ApiError {
  statusCode?: number;
  message: string;
  errors?: Record<string, unknown>;
  stack?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
