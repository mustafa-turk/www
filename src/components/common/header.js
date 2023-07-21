import { GithubIcon, LinkedInIcon } from "./icon";

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <a href='/'>Mustafa Türk</a>

      <div className='flex items-center gap-3'>
        <a
          href='https://github.com/mustafa-turk'
          target='_blank'
          rel='noreferrer'
        >
          <GithubIcon size='20' />
        </a>

        <a
          href='https://www.linkedin.com/in/mtafaturk/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon size='20' />
        </a>
      </div>
    </header>
  );
}
