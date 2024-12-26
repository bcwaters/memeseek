'use client'

import {useSearchParams} from 'next/navigation'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Page() {

//TODO
      const ImageComponent = () => {
          //I really prefer a way to pass a state to the editor component without query params
          //TODO this feels hacky to  me, the query should be a component prop
          const params = useSearchParams()
          //TODO decide on default behavior for no params
          const location = params.get('location')
//DEFAULT MEME when there are no params
        return(
                 <Image
                 src={location === null ? '/templates/theyLiveSunglasses.png' : location}
                 width={300}
                 height={100}
                 className="block md:block"
                 alt="stub of catalog img"
                 />
                )
            }


  return (<p>write code to insert editor here:<br></br>
      <Suspense>
        <ImageComponent/>
        </Suspense>
  </p>)
}