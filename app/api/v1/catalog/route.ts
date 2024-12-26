import 'dotenv/config';
//SUCH A LONG DIRECTORY NAVIGATION? can internal packages node projects
import { getAllTemplates } from '../../../../db/drizzle-queries.ts'
//TODO implement PINO logging

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {

   console.log('querying ORM: getAllTemplates()')

   try {
       let response = Response.json(await getAllTemplates());
   	    return response;
   } catch (error) {
   	    return Response.json({ error }, { status: 500 });
   }
}