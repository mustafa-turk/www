import { GithubIcon, LinkedInIcon } from "./icon";

export default function Header() {
  return (
    <header className="">
      <a href="/">
        <h1 className="text-lg text-neutral-900 mb-[-5px]">Mustafa Türk</h1>
      </a>
      <span className="text-sm text-neutral-500">Frontend Engineer</span>
    </header>
  );
}
