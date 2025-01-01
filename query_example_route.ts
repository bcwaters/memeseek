// import { getAllTemplates } from '../../db/drizzle-queries.ts'
//
// export async function GET() {
//
// console.log(await getAllTemplates())
//
//    try {
//    	return Response.json(await getAllTemplates());
//    } catch (error) {
//    	return Response.json({ error }, { status: 500 });
//    }
// }

//documenation https://orm.drizzle.team/docs/get-started/postgresql-new
//
//  ORMLESS approach
//  import { db } from "@vercel/postgres";
//
//  const client = await db.connect();
//
//  async function listMetadata() {
//  	const data = await client.sql`
//      SELECT name, location
//      FROM catalog
//    `;
//
//  	return data.rows;
//  }
//
// export async function GET() {
//
//    try {
//    	return Response.json(await listMetadata());
//    } catch (error) {
//    	return Response.json({ error }, { status: 500 });
//    }
// }