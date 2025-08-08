import axios, { AxiosError, AxiosResponse } from "axios";
import { ApiError, ApiResponse } from "@/models/api.model";

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://3line-apivercel.vercel.app/api";
const instance = axios.create({
  baseURL: baseURL,
});

export async function handleAxiosError(error: any): Promise<any> {
  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.status;

    const backendMessage = error.response?.data?.message as string | undefined;
    const message =
      backendMessage || error.message || "An unknown error occurred";
    const errors = error.response?.data?.errors;

    return Promise.reject({
      statusCode,
      message,
      errors,
      stack: error.stack,
    } satisfies ApiError);
  }

  const e = error as Error;
  return Promise.reject({
    message: e.message,
    stack: e.stack,
  } satisfies ApiError);
}

const handleResponse = <T>(response: AxiosResponse): ApiResponse<T> => {
  return {
    data: response.data.data,
    message: response.data.message,

    success: response.data.success,
  };
};

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    return handleAxiosError(error);
  }
);

class HTTPClient {
  static async get<T>(url: string, config?: object): Promise<ApiResponse<T>> {
    const res = await instance.get(url, config);
    return handleResponse<T>(res);
  }
  // can be extended just because but mehh...
}

export default HTTPClient;
