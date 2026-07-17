import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log('Welcome to the Pokedex!\nUsage:\n')
    for (let command in state.commandsRegistry) {
        console.log(`${command}: ${state.commandsRegistry[command].description}`)
    } 
};