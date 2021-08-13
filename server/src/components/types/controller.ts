import fetch from 'node-fetch'
import { Types } from "./interface";

export = (endPoint: string) => {

    async function get(value: string) {
        try {
            const url = `${endPoint}/types.json`;
            const data = await fetch(url);
            if( ! data.ok ) return data;
            else {
                const lstType: Types[] = await data.json();
                return value ? lstType.filter( (type) => type.english == value ) : lstType;
            }
        } catch ( err ) { return err };
    }
    
    return { get }
}