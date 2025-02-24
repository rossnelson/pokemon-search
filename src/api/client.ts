export class APIError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchWithError(
  url: string,
  options?: RequestInit,
): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new APIError(response.status, await response.text());
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

