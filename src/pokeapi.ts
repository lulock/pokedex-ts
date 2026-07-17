export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    constructor() {}
    
    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = `${PokeAPI.baseURL}/location-area`;
        if (pageURL) {
            url = pageURL;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result: ShallowLocations = await response.json();
        return result;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location/${locationName}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result: Location = await response.json();
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