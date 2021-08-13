import fetch from 'node-fetch'
import { Move } from "./interface";

export = (endPoint: string) => {

    async function get(value: string | number) {
        try {
            const url = `${endPoint}/moves.json`;
            const data = await fetch(url);
            if( ! data.ok ) return data;
            else {
                const lstMove: Move[] = await data.json();
                return value ? lstMove.filter( (move) => move.id == value || move.ename == value ) : lstMove;
            }
        } catch ( err ) { return err };
    }
    
    return { get }
}