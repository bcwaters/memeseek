import Image from 'next/image';
import Link from 'next/link'
import { stubImageLocation } from '../lib/utils.ts';
import { mockGetTemplates } from '../lib/utils.ts';

export default function Page() {

//TODO replace mockFunction with real api call
const templates = mockGetTemplates();

//TODO Map array of template jsons to generate images and remove stubImageLocation
    return <div>
            {templates.map(template => (
                <Link href={{pathname:"/catalog/editor", query:template}}>
                    <Image
                        src={template.location}
                        width={100}
                        height={120}
                        className="hidden md:block"
                        alt="stub of catalog img"
                    />
                </Link>
                )
            )}


            </div>;

}