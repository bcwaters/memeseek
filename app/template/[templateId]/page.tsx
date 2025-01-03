// "use client";

import Image from "next/image";
import { Suspense } from "react";

export default async function Page({
	params,
}: {
	params: Promise<{ templateId: string }>;
}) {
	//TODO
	const templateId = (await params).templateId;
	console.log({ templateId });

	// const ImageComponent = () => {
	// 	return (
	// 		<Image
	// 			src={
	// 				location === null
	// 					? "/templates/theyLiveSunglasses.png"
	// 					: location
	// 			}
	// 			width={300}
	// 			height={100}
	// 			className="block md:block"
	// 			alt="stub of catalog img"
	// 		/>
	// 	);
	// };

	return <div className="text-white">{templateId}</div>;

	// return (
	// 	<Suspense>
	// 		<ImageComponent />
	// 	</Suspense>
	// );
}
