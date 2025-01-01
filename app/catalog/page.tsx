import Image from 'next/image';
import Link from 'next/link'
import {logger} from '../lib/logger';

//TODO set up multiple HOSTNAMES in urls
logger.info("CALLING API from catalog page:")
let data = await fetch(process.env.HOSTNAME+'/api/v1/catalog')

//let templates: {id: string, name: string, location:string}[] = []
let templates = await data.json()//await convertStreamToJson(data.body)
logger.info("Response.body data:")
logger.info(templates)

export default function Page() {
   return <div> Click template to start editing
            {(templates as {id: string, name: string, location:string}[]).map(template => (
                <Link key={template.id} href={{pathname:"/catalog/editor", query:template}}>
                    <Image
                        src={template.location}
                        width={100}
                        height={120}
                        className="block md:block"
                        alt="stub of catalog img"
                    />
                </Link>
                )
            )}


            </div>;

}