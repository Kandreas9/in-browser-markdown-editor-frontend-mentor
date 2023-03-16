import Dexie from "dexie";

const database = new Dexie("database");
database.version(1).stores({
    documents: "++id, name, date, content",
});

export const documentTable = database.table("documents");

export default database;
