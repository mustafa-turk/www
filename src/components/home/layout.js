import Header from "../common/header";

export default function Layout({ children }) {
  return (
    <div className='flex flex-col gap-12 max-w-2xl p-5 mx-auto mt-6'>
      <Header />

      {children}

      <footer className='text-center text-neutral-500 text-sm'>
        © 2023 Mustafa Türk
      </footer>
    </div>
  );
}
