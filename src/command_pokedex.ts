import { Pokemon } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    // displays all caught pokemon available in pokedex
    console.log("Your Pokedex:")
    for (let pokemon in state.pokedex) {
        console.log(` - ${pokemon}`)
    }
};