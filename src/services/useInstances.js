import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db'

export function useInstances() {
    const instances = useLiveQuery(() => db.instances.toArray(), []);
    const addInstance = (data) => db.instances.add(data);

    return { instances: instances ?? [], addInstance };
}