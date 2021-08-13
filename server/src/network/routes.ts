import pokemon from '../components/pokemon/network'
import items from '../components/items/network'
import moves from '../components/moves/network'
import types from '../components/types/network'
export default (server: any) => {
    server.use('/api/pokemon', pokemon);
    server.use('/api/items', items);
    server.use('/api/moves', moves);
    server.use('/api/types', types);
}