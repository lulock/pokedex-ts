import { throws } from "node:assert";
import { Cache } from "./pokecache.js";

export class PokeAPI {

    #cache = new Cache(5000);

    private static readonly baseURL = "https://pokeapi.co/api/v2";
    constructor() {}
    
    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = `${PokeAPI.baseURL}/location-area`;
        if (pageURL) {
            url = pageURL;
        }
        //console.log(`${this.#cache.get(url)}`);
        const cached = this.#cache.get(url);
        if (cached) {
            return cached;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result: ShallowLocations = await response.json();

        this.#cache.add(url, result);

        return result;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location/${locationName}`;

        const cached = this.#cache.get(url);
        if (cached) {
            return cached;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result: Location = await response.json();

        this.#cache.add(url, result);

        return result;
    }
}

export type ShallowLocations = {
    count: number
    next: string
    previous: any
    results: Location[]
};

export type Location = {
    name: string
    url: string
};