import Header from "../common/header";
import AnimatedBlob from "./animated-blob";

export default function Layout({ children }) {
  return (
    <div className='flex flex-col gap-12 max-w-2xl p-5 mx-auto mt-6'>
      <div className='absolute top-[-200px] left-[50%] w-[300px] mx-auto translate-x-[-100%]'>
        <AnimatedBlob />
      </div>

      <div className='absolute top-[-200px] left-[50%] w-[300px] mx-auto translate-x-[-10%]'>
        <AnimatedBlob />
      </div>

      <Header />

      {children}

      <footer className='text-center text-neutral-500 text-sm'>
        © 2023 Mustafa Türk
      </footer>
    </div>
  );
}
