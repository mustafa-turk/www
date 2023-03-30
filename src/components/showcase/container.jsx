const Page = ({ title, children }) => {
  return (
    <div className='bg-black box-border pt-4 w-screen h-screen'>
      <h1 className='text-center text-xl'>{title}</h1>
      {children}
    </div>
  );
};

export default Page;
