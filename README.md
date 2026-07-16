# Pokedex CLI (TypeScript)
![Node](https://img.shields.io/badge/node-22.x-green)
![Vitest](https://img.shields.io/github/package-json/dependency-version/lulock/pokedex-ts/dev/vitest)
![TypeScript](https://img.shields.io/github/package-json/dependency-version/lulock/pokedex-ts/dev/typescript)
![Last Commit](https://img.shields.io/github/last-commit/lulock/pokedex-ts)
![PokeAPI](https://img.shields.io/badge/data-PokeAPI-red)
![License](https://img.shields.io/github/license/lulock/pokedex-ts)

A commandline Pokedex REPL built while working through Boot.dev's "Build a Pokedex in TypeScript" course.


## Features

- [x] REPL loop with input cleaning
- [x] `help` command
- [x] `exit` command
- [ ] Pokemon exploration commands
- [ ] Catching Pokemon
- [ ] Inspecting caught Pokemon

## Development

This project uses a devcontainer. Open in VS Code with the 
"Dev Containers" extension installed, then "> Reopen in Container" 
to get a preconfigured environment with Node.js and dependencies ready to go. 

Dependencies are installed on build via `"postCreateCommand": "npm install"` in `.devcontainer/devcontainer.json`.

## Getting Started

```
npm run dev
```

## Testing

```
npm test
```