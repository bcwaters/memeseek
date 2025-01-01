import 'dotenv/config';
import { NextRequest, NextResponse } from 'next/server';
//SUCH A LONG DIRECTORY NAVIGATION? can internal packages node projects
import { getAllTemplates } from '../../../../../db/drizzle-queries.ts'
//TODO implement PINO logging
import {logger} from '../../../../lib/logger';

import {writeTemplateToFileSystem} from '../../../../lib/utils';
// example child logger const log = logger.child({ module: "api" });

//TODO IMAGE SHOULD BE ADDED VIA PUT
/**
 * @swagger
 * /api/v1/catalog/template:
 *   post:
 *     requestBody:
 *       content:
 *         image/*: # can be img
 *     description: post template to catalog db
 *     responses:
 *       200:
 *         description: Post Success Image added
 */

export async function POST(request: NextRequest) {
   try {
            logger.debug('route reached')
            logger.debug('savingImage with writeTemplateToFileSystem()')
            logger.debug("request")
            console.log(request)

            writeTemplateToFileSystem(request)
   	        return Response.json({'msg':'upload successful'});
   } catch (error) {
            logger.debug("error processing POST:")
            console.log(error)
   	        return Response.json({ error }, { status: 500 });
   }
}


export async function PUT(request: NextRequest) {
   try {
            logger.debug('route reached')
            logger.debug('savingImage with writeTemplateToFileSystem()')
            logger.debug("request")
            console.log(request)

            writeTemplateToFileSystem(request)
   	        return Response.json({'msg':'upload successful'});
   } catch (error) {
            logger.debug("error processing PUT:")
            console.log(error)
   	        return Response.json({ error }, { status: 500 });
   }
}