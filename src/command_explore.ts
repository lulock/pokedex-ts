import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    const encounters = await state.api.fetchPokemonEncounters(args[0]);
    console.log(`Exploring ${args[0]}...`);
    console.log("Found Pokemon:");
    for (let encounter of encounters.pokemon_encounters) {
        console.log(`- ${encounter.pokemon.name}`);
    }
};