
import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { promises as fs } from 'fs';
import { writeFile } from "fs/promises";
import {logger} from './logger'

export const writeTemplateToFileSystem =  async (req: NextRequest) => {

  const formData = await req.formData();
  const file =  formData.get("file");


  //Error if no file uploaded
  if (!file) {
      logger.debug('no file recieved')
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  } else{
      // @ts-ignore
      logger.debug('file recieved:' + file.name)
   }

  // Convert the file data to a Buffer
  // @ts-ignore
  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    await writeFile(
        // @ts-ignore
        path.join(process.cwd(), "public/uploads/" + file.name),
        buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
      // @ts-ignore
    logger.info("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};




//   mocked file code slop
//   const fileLoaded = await fs.readFile(process.cwd() + '/seed/templateDB/yeschad.json', 'utf8');
//   //console.log("file loaded:", typeof fileLoaded)
//   //formData.append("file", fileLoaded)
//     console.log("Request Form Data:")
//     console.log(formData)
//   const file =  formData.get("file");
//   console.log(typeof file)
//   const reqFormData = await req.text();
//     console.log("request form data")
//     console.log(reqFormData)
// await fs.writeFile('public/uploads/' + file.name, file)
//   console.log("image written")
  //const buffer = Buffer.from(await new TextEncoder().encode(file).buffer);
