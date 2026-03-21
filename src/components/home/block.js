import Link from "components/common/link";
import { ArrowRightIcon } from "components/common/icon";

export default function Block({ children, href }) {
  return (
    <Link
      href={href}
      className='flex justify-between items-center py-3 px-4 border border-neutral-200 hover:bg-neutral-100 rounded-lg text-neutral-700 transition-colors'
    >
      <span>{children}</span>
      <ArrowRightIcon size='26' />
    </Link>
  );
}
