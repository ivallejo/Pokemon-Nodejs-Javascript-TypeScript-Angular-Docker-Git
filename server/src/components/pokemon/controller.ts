import fetch from 'node-fetch'
import { Pokemon } from "./interface";

export = (endPoint: string) => {

    async function get(value: string | number) {
        try {
            const url = `${endPoint}/pokedex.json`;
            const data = await fetch(url);
            if( ! data.ok ) return data;
            else {
                const lstPokemon: Pokemon[] = await data.json();
                return value ? lstPokemon.filter( (poke) => poke.id == value || poke.name?.english.toLowerCase().replace(/\s/g, '') == value.toString().toLowerCase() ) : lstPokemon;
            }
        } catch ( err ) { return err };
    }

    return { get }
}