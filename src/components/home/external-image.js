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
        <p className="text-neutral-300">{title}</p>
        <span className="text-neutral-400">{description}</span>
      </div>
      <div className="flex gap-2">
        <Link href={appUrl} target="_blank">
          <button className="border border-neutral-800 hover:bg-neutral-900 rounded-lg flex justify-center items-center px-4 gap-2 text-sm py-1 bg-neutral-900 text-neutral-400">
            <span>Open</span>
            <ExternalLink />
          </button>
        </Link>
        {sourceUrl && (
          <Link href={sourceUrl} target="_blank">
            <button className="border border-neutral-800 hover:bg-neutral-900 rounded-lg text-neutral-400 flex justify-center items-center px-4 gap-2 text-sm py-1">
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
