 import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 import {catalog} from './templateDB/seedCatalogArray.js'
 const client = await db.connect();

 async function seedCatalog() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await client.sql`
     CREATE TABLE IF NOT EXISTS Catalog (
       id TEXT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       location TEXT NOT NULL UNIQUE
     );
   `;

   const insertedMetadata = await Promise.all(
     catalog.map(async (metadata) => { console.log(metadata)
       return client.sql`
         INSERT INTO Catalog (id, name, location)
         VALUES (${metadata.id}, ${metadata.name}, ${metadata.location});
       `;
     }),
   );

   return insertedMetadata;
 }

export async function GET() {

   try {
     await client.sql`BEGIN`;
     await seedCatalog();
     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }

 }
