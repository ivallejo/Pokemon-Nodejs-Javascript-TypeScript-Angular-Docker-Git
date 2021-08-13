import fetch from 'node-fetch'
import { Item } from "./interface";

export = (endPoint: string) => {

    async function get(value: string | number = '') {
        try {
            const url = `${endPoint}/items.json`;
            const data = await fetch(url);
            if( ! data.ok ) return data;
            else {
                const lstItem: Item[] = await data.json();
                return value ? lstItem.filter( (item) => item.id == value || item.name?.english == value ) : lstItem;
            }
        } catch ( err ) { return err };
    }
    
    return { get }
}