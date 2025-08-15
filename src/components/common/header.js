import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "./icon";
import logo from "../../../public/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a href="/">
        <Image src={logo} width={140} alt="logo" className="opacity-70" />
      </a>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/mustafa-turk"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size="20" />
        </a>
      </div>
    </header>
  );
}
