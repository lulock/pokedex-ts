import { Interface } from "node:readline";
import type { CLICommand } from "./state.js"
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(/\s+/)
}

export function startREPL(state: State) {
    state.rlInterface.prompt()

    state.rlInterface.on('line', async (line) => {
        const cleanedLine = cleanInput(line);
        const command = cleanedLine[0];
        const registry = state.commandsRegistry;
        if (command in registry) {
            try {
                await registry[command].callback(state);
            } catch (err) {
                if (err instanceof Error) {
                    console.log(err.message)
                } else {
                    console.log(err)
                }
            }
        } else {
            console.log(`Uknown command: ${command}`)
        }

        state.rlInterface.prompt();
    });
}