'use client'

import {useSearchParams} from 'next/navigation'
import Image from 'next/image'

export default function Page() {
    //TODO this feels hacky to  me, the query should be a component prop
      const params = useSearchParams()
    //TODO decide on default behavior for no params
      const location = params.get('location')


  return (<p>write code to insert editor here:<br></br>
         <Image
                src={location === null ? '/noUrl' : location}
                width={300}
                height={100}
                className="hidden md:block"
                alt="stub of catalog img"

          />
  </p>)
}