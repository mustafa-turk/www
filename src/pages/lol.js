import DragDrop from "components/showcase/drag-drop";
import Head from "next/head";

const Page = () => {
  return (
    <div className='bg-black box-border pt-4 w-screen h-screen flex flex-col'>
      <Head>
        <title>Mustafa Turk - Drag and Drop</title>
      </Head>
      <h1 className='text-center text-xl'>Drag and Drop</h1>
      <button>Source</button>
      <DragDrop />
    </div>
  );
};

export default Page;
