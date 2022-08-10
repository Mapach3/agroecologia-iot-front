import { API_URL } from "../../config/general-config";

interface FetchParams {
  url: string;
  body?: object;
}

class FetchService {
  //TODO: Implement GET with GridRequestParams handling
  // static async get<T>(): Promise<T> {}

  static async post<T>(params: FetchParams): Promise<T> {
    const { url, body } = params;
    const headers = this.getHeaders();
    const response = await fetch(`${API_URL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    return FetchService.processResponse<T>(response);
  }
  static async put<T>(params: FetchParams): Promise<T> {
    const { url, body } = params;
    const headers = this.getHeaders();
    const response = await fetch(`${API_URL}${url}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers,
    });

    return FetchService.processResponse<T>(response);
  }
  static async delete<T>(params: FetchParams): Promise<T> {
    const { url, body } = params;
    const headers = this.getHeaders();
    const response = await fetch(`${API_URL}${url}`, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers,
    });

    return FetchService.processResponse<T>(response);
  }

  static getHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //TODO: Add Authorization from Redux Store
    return headers;
  }

  static async processResponse<T>(response: Response) {
    if (response.ok)
      //201 or 200
      return (await response.json()) as T;

    if (response.status === 400)
      //Bad Request
      throw new Error((await response.json()) as string);

    if (response.status === 403)
      //Forbidden
      throw new Error();

    if (response.status === 404)
      //Not Found
      throw new Error();

    if (response.status === 500)
      //Not Found
      throw new Error("Internal Server Error [500]");

    return {} as T;
  }
}

export default FetchService;
