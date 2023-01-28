import { ExternalLink } from "../common/icon";

export default function ExternalLinkButton({ children }) {
  return (
    <button className='bg-neutral-900 rounded-2xl text-neutral-400 flex justify-center items-center absolute bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-1 gap-2 text-sm'>
      <span>{children}</span>
      <ExternalLink />
    </button>
  );
}
