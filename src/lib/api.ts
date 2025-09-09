import axios, { type AxiosResponse } from "axios";

const API_URL = process.env.API_URL || "http://localhost:3000";

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export default {
  delete<T = unknown>(
    uri: string,
    options?: Record<string, unknown>
  ): Promise<AxiosResponse<T>> {
    return axios.delete<T>(`${API_URL}/${uri}`, {
      headers: {
        ...DEFAULT_HEADERS,
      },
      ...options,
    });
  },

  get<T = unknown>(
    uri: string,
    options?: Record<string, unknown>
  ): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${API_URL}/${uri}`, {
      headers: {
        ...DEFAULT_HEADERS,
      },
      ...options,
    });
  },

  post<T = unknown>(
    uri: string,
    data: Record<string, unknown>,
    options?: Record<string, unknown>
  ): Promise<AxiosResponse<T>> {
    return axios.post<T>(`${API_URL}/${uri}`, data, {
      headers: {
        ...DEFAULT_HEADERS,
      },
      ...options,
    });
  },
};
