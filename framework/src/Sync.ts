import axios, { AxiosPromise } from "axios";

interface ApiResource {
  id?: number;
}
export class Sync<T extends ApiResource> {
  constructor(public baseUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data;
    if (id) {
      return axios.put(`${this.baseUrl}/${id}`, data);
    } else {
      return axios.post(`${this.baseUrl}`, data);
    }
  }
}
