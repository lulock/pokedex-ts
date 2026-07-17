import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const locations = await state.api.fetchLocations(state.nextLocationsURL);
    for (let location of locations.results) {
        console.log(location.name)
    }
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
};

export async function commandMapb(state: State): Promise<void> {
    const locations = await state.api.fetchLocations(state.prevLocationsURL);
    for (let location of locations.results) {
        console.log(location.name)
    }
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
};