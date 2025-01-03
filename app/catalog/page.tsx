import Image from "next/image";
import Link from "next/link";
import { logger } from "../lib/logger";

//TODO set up multiple HOSTNAMES in urls
logger.info("CALLING API from catalog page:");
let data = await fetch(process.env.API_HOSTNAME + "/api/v1/catalog");
console.log({ data });

//let templates: {id: string, name: string, location:string}[] = []
let templates = await data.json(); //await convertStreamToJson(data.body)
logger.info("Response.body data:");
logger.info(templates);

export default function Page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			{(
				templates as { id: string; name: string; location: string }[]
			).map((template) => (
				<Link
					key={template.id}
					href={`/meme/${template.id}`}
					className="flex dark:hover:bg-neutral-800 hover:bg-neutral-100 p-4 rounded-sm"
				>
					<div className="w-[128px] h-auto flex-shrink-0 mr-5">
						<Image
							src={template.location}
							width={128}
							height={0} // Not required when using object-fit
							className="mr-5 object-contain" // Ensures the image is resized proportionally
							alt={template.name}
						/>
					</div>
					<div>
						<h3 className="font-bold dark:text-neutral-200 text-lg">
							{template.name}
						</h3>
						<p className="text-sm dark:text-neutral-300">
							Lorem ipsum odor amet, consectetuer adipiscing elit.
							Odio neque conubia quisque taciti risus potenti
							vulputate.
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
