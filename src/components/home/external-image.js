import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "components/common/link";
import { CodeIcon, ExternalLink } from "components/common/icon";

function ExternalImage({ sourceUrl, imgSrc, appUrl }) {
  return (
    <div className='mb-4'>
      <Image
        src={imgSrc}
        alt='personal project'
        width={2029}
        height={1129}
        className='mb-2'
      />
      <div className='flex gap-1 justify-center'>
        <Link href={appUrl} target='_blank'>
          <button className='hover:bg-neutral-800 transition bg-neutral-900 rounded-lg text-neutral-400 flex justify-center items-center px-4 py-1 gap-2 text-md'>
            <span>Open</span>
            <ExternalLink />
          </button>
        </Link>
        <Link href={sourceUrl} target='_blank'>
          <button className='border border-neutral-900 hover:bg-neutral-900 rounded-lg text-neutral-400 flex justify-center items-center px-4 py-1 gap-2 text-md'>
            <span>Open source</span>
            <CodeIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ExternalImage), {
  ssr: false,
});
