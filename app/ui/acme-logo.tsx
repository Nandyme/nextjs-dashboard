import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <Image
        src="/i/seirai-logo.png"
        alt="Seirai Logo"
        width={120}
        height={80}
        priority
      />
      <p className="text-[12px] ml-2"></p>
    </div>
  );
}