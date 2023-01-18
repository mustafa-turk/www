import Header from "./header";

export default function Layout({ children, className }) {
  return (
    <div className='flex flex-col gap-16 max-w-2xl p-5 mx-auto mt-6'>
      <Header />

      {children}

      <footer className='text-center text-neutral-500 text-sm'>
        © 2023 Mustafa Türk
      </footer>
    </div>
  );
}
