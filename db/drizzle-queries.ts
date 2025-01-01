import { catalogTable } from './schema.ts';
import {db} from "./index.ts"
import {logger} from '../app/lib/logger';


export async function getAllTemplates() {
 const templates = await db.select().from(catalogTable);
 logger.debug('database query success:')
 logger.debug(templates)

 return templates;
}

