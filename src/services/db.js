import Dexie from 'dexie';

export const db = new Dexie('Aria2WebDb');

db.version(1).stores({
    instances: '++id, name, domain, port, route, method, headers, password, isDefault, updatedAt'
});