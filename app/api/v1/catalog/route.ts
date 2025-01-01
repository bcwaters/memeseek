import 'dotenv/config';
//SUCH A LONG DIRECTORY NAVIGATION? can internal packages node projects
import { getAllTemplates } from '../../../../db/drizzle-queries.ts'
//TODO implement PINO logging
import {logger} from '../../../lib/logger';
// example child logger const log = logger.child({ module: "api" });

/**
 * @swagger
 * /api/v1/catalog:
 *   get:
 *     description: Returns an array of templates
 *     responses:
 *       200:
 *         description: add example response
 */

export async function GET() {


   try {
       logger.debug('querying ORM: getAllTemplates()')

       let response = Response.json(await getAllTemplates());
   	    return response;
   } catch (error) {
       logger.info(error)
   	    return Response.json({ error }, { status: 500 });
   }
}