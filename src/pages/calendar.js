export default function Calendar() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://apps.apple.com/app/id6447790237',
      permanent: false,
    },
  };
}