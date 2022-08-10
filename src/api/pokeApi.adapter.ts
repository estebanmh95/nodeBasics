import axios from "axios";

export interface HttpAdapter {
	get<T>(url: string): Promise<T>;
}

export class PokeApiAdapter implements HttpAdapter {
	private readonly axios = axios;

	async get<T>(url: string) {
		// peticion hget
		const { data } = await this.axios.get<T>(url);
		return data;
	}

	async post(url: string, data: any) {
		// peticion hget
		return;
	}
	async patch(url: string, data: any) {
		// peticion hget
		return;
	}
	async delete(url: string) {
		// peticion hget
		return;
	}
}

export class PokeApiFetchAdapter implements HttpAdapter {
	async get<T>(url: string): Promise<T> {
		const resp = await fetch(url);
		const data: T = await resp.json();

		return data;
	}
}
