export default function Passgen() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://secret.mustafaturk.me',
      permanent: false,
    },
  };
}