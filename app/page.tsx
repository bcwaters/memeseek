import SiteLogo from '@/app/ui/site-logo';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

//TODO homepage should include navbar and feel cohesive with /catalog
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/*TODO Boiler plate welcome message to replace */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to ad free memes.</strong> Use templates to generate memes
          </p>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
           <Link className="bg-blue-600" href="/catalog">Click here to view app</Link>
        </div>
      </div>
    </main>
  );
}
