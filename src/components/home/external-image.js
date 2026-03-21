import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "components/common/link";
import { CodeIcon, ExternalLink } from "components/common/icon";

function ExternalImage({ sourceUrl, imgSrc, appUrl, title, description }) {
  return (
    <div className="mb-4">
      <Link href={appUrl} target="_blank">
        <Image
          src={imgSrc}
          alt="personal project"
          width={2029}
          height={1129}
          className="mb-3"
        />
      </Link>
      <div className="mb-2">
        <span className="text-neutral-600">{description}</span>
      </div>
      <div className="flex gap-2">
        <Link href={appUrl} target="_blank">
          <button className="border border-neutral-200 hover:bg-neutral-100 rounded-lg flex justify-center items-center px-4 gap-2 text-sm py-1 bg-white text-neutral-800 transition-all">
            <span>Open</span>
            <ExternalLink />
          </button>
        </Link>
        {sourceUrl && (
          <Link href={sourceUrl} target="_blank">
            <button className="border border-neutral-200 hover:bg-neutral-100 rounded-lg text-neutral-800 flex justify-center items-center px-4 gap-2 text-sm py-1 bg-white transition-all">
              <span>Source</span>
              <CodeIcon />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ExternalImage), {
  ssr: false,
});
