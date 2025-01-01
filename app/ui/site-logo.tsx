import { StrikethroughIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'

export default function AcmeLogo() {
  return (
      <div>
      <Image
        src="/favicon_temp.png"
        width={100}
        height={120}
        className="block md:block"
        alt="stub of catalog img"
      /><div>memeseek</div>
      </div>
  );
}
