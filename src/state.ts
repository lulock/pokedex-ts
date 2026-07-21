import { createInterface, type Interface } from "node:readline";
import { stdin, stdout } from "node:process";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import { commandRelease } from "./command_release.js";

export type State = {
    rlInterface: Interface;
    commandsRegistry: Record<string, CLICommand>;
    api: PokeAPI;
    nextLocationsURL: string | undefined;
    prevLocationsURL: string | undefined;
    pokedex : Record<string, Pokemon>;
};

export type CLICommand = {
  name: string;
  description: string;
  //callback: (state: State) => Promise<void>;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
    const rl = createInterface({
      input: stdin,
      output: stdout,
      prompt: 'Pokedex > ',
    });

    const commands = {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Prints a help message.",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the names of the next 20 location areas in the Pokemon world.",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the names of the previous 20 location areas in the Pokemon world.",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Displays the names of the Pokemon enountered in the area. Takes location area name or id as input.",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Catch pokemon and add to pokedex if successgful.",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Display pokemon info if caught and added to pokedex.",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "List all caught pokemon in pokedex.",
            callback: commandPokedex,
        },
        release: {
            name: "release",
            description: "Release pokemon back into the wild and removes record from pokedex.",
            callback: commandRelease,
        }
    
      };

    return {
        rlInterface: rl,
        commandsRegistry: commands,
        api: new PokeAPI(),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
        pokedex: {},
    }
}
