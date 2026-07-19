import { Pokemon } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    // fetches information about pokemon and uses "base experience" to determine chance of capture.
    // displays message with success or failure
    const name = args[0]
    const pokemon = await state.api.fetchPokemon(name);
    console.log(`Throwing a Pokeball at ${name}...`)
    const k = 150;
    const catchChance = k / (pokemon.base_experience + k);
    const caught = Math.random() < catchChance;

    if (caught) {
        console.log(`${name} was caught!`);
        state.pokedex[`${pokemon.name}`] = pokemon; 
    } else {
        console.log(`${name} escaped!`);
    }
};