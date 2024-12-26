import { catalogTable } from './schema.ts';
import {db} from "./index.ts"


export async function getAllTemplates() {
 const templates = await db.select().from(catalogTable);
 console.log('database query success:\n', templates)

 return templates;
}

