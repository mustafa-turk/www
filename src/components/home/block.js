import Link from "components/common/link";

export default function Block({ children, href }) {
  return (
    <Link
      href={href}
      className='flex justify-between align-center py-3 px-4 bg-neutral-900 hover:bg-neutral-800 rounded-lg text-neutral-400 transition-colors'
    >
      <span>{children}</span>
    </Link>
  );
}
