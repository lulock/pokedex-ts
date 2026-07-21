import { Pokemon } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandRelease(state: State, ...args: string[]): Promise<void> {
    // releases specified pokemon back into thw wild

    const name = args[0];
    if (name in state.pokedex){
        delete state.pokedex[name];
        console.log(`You have released ${name} back into the wild`)
    } else {
        console.log(`You have not caught that pokemon`)
    }

};