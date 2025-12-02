import Link from "next/link";
import Header from "../common/header";

export default function Layout({ children }) {
  return (
    <div className='flex flex-col gap-12 max-w-2xl p-5 mx-auto mt-6 overflow-hidden'>
      <Header />
      {children}
      <footer className='flex justify-between text-center text-neutral-500 text-sm mb-10'>
        <div className="flex justify-center items-center gap-8 flex-row">
            <Link href="https://github.com/mustafa-turk" target="_blank" className="hover:text-neutral-300 transition-all">
              Github
            </Link>
            <Link href="https://www.linkedin.com/in/mustafa-tk/" target="_blank" className="hover:text-neutral-300 transition-all">
              LinkedIn
            </Link>
        </div>
        <span className="block">
          © 2025
        </span>
      </footer>
    </div>
  );
}
