import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import type { CLICommand } from "./command.js"
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(/\s+/)
}

const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: 'Pokedex > ',
});

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
        name: "exit",
        description: "Exit the Pokedex",
        callback: commandExit,
    },
    help: {
        name: "help",
        description: "Prints a help message.",
        callback: commandHelp,
    }

  };
}

export function startREPL() {
    rl.prompt()

    rl.on('line', (line) => {
        const cleanedLine = cleanInput(line);
        const command = cleanedLine[0];
        const registry = getCommands();
        
        if(command in registry){
            registry[command].callback(registry);
        } else{
            console.log(`Unknown command`);
        }

        rl.prompt();
    }).on('close', () => {
        commandExit();
    });
}