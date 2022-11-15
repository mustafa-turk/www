import { ExternalLink } from "./icon";

export default function ExternalLinkButton({ children }) {
  return (
    <button className='bg-neutral-200 rounded-2xl text-neutral-700 flex justify-center items-center absolute bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-1 gap-2 text-sm'>
      <span>{children}</span>
      <ExternalLink />
    </button>
  );
}
