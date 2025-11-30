import { GithubIcon, LinkedInIcon } from "./icon";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a href="/">
        <span className="font-mono text-sm text-neutral-300">Mustafa Türk</span>
      </a>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/mustafa-turk"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size="20" />
        </a>
        <a href="https://www.linkedin.com/in/mustafa-tk/" target="_blank" rel="noreferrer">
          <LinkedInIcon size="20" />
        </a>
      </div>
    </header>
  );
}
