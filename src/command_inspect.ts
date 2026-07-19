import { Pokemon } from "./pokeapi.js";
import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    // fetches information about pokemon and uses "base experience" to determine chance of capture.
    // displays message with success or failure
    const name = args[0]
    if (name in state.pokedex){
        const pokemon = state.pokedex[name];
        console.log(`Name: ${pokemon.name},\nHeight: ${pokemon.height},\nWeight: ${pokemon.weight},\nStats:`
        )
        for (let stat of pokemon.stats) {
            console.log(`   -${stat.stat.name}: ${stat.base_stat}`)
        }
        console.log("Types:")
        for (let type of pokemon.types) {
            console.log(`   -${type.type.name}`)
        }
    } else {
        console.log("you have not caught that pokemon");
    }
};