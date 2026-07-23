import { Pokemon } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandNickname(state: State, ...args: string[]): Promise<void> {
    // throws a pokeball at pokemon and uses "base experience" to determine chance of capture.
    // displays message with success or failure
    const current_name = args[0]
    const nickname = args[1]
    
    if (current_name in state.pokedex && current_name !== nickname) {
        console.log(`Renaming ${current_name} to ${nickname}...`);
        const clone = structuredClone(state.pokedex[current_name]);
        state.pokedex[nickname] = clone;
        delete state.pokedex[current_name];

    } else {
        console.log(`${current_name} not found in pokedex.`);
    }
};