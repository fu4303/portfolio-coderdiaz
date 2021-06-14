import Image from "next/image";
import Container from "@/components/Container";
import TwitterIcon from "@/components/icons/Twitter";
import GithubIcon from "@/components/icons/GitHub";

export default function Footer() {
  return (
    <footer className="py-7">
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
            <div className="flex flex-col space-y-1">
              <span className="text-gray-400 text-sm">&copy; 2015 — 2021</span>
              <span className="text-white font-medium">Javier Diaz</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-200 px-2 text-sm font-medium">Links</span>
              <div className="flex space-x-1 items-center text-sm text-gray-400">
                <a className="px-2 py-1" href="#">Digital Garden</a>
                <a className="px-2 py-1" href="#">Archive</a>
                <a className="px-2 py-1" href="#">Contact</a>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-200 px-2 text-sm font-medium">Social</span>
              <div className="flex space-x-1 items-center text-sm text-gray-400">
                <a className="px-2 py-1" href="#">Dribbble</a>
                <a className="px-2 py-1" href="#">LinkedIn</a>
                <a className="px-2 py-1" href="#">Indie Hackers</a>
              </div>
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
    </footer>
  );
}