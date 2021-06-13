import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import Container from "@/components/Container";
import GithubIcon from "@/components/icons/GitHub";
import TwitterIcon from "@/components/icons/Twitter";

export default function Header() {
  return (
    <header className="py-7">
      <Container className="max-w-screen-lg">
        <div className="flex justify-between">
          <div className="flex space-x-8 items-center">
            <div className="flex items-center">
              <Image
                className="rounded-full"
                src="/assets/images/avatar.jpg"
                width={44}
                height={44}
                priority={true} />
            </div>
            <div className="flex space-x-2 items-center text-gray-300">
              <a className="px-3 py-2 text-purple-300" href="#" aria-label="Home">
                <HomeIcon className="w-5 h-5" />
              </a>
              <a className="px-3 py-2" href="#">Digital Garden</a>
              <a className="px-3 py-2" href="#">Work</a>
              <a className="px-3 py-2" href="#">Uses</a>
              <a className="px-3 py-2" href="#">Books</a>
              <a className="px-3 py-2" href="#">Contact</a>
              <a className="px-3 py-2" href="#">About</a>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-300 items-center">
            <a href="#" className="px-1 py-2" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="px-1 py-2" aria-label="Twitter">
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}