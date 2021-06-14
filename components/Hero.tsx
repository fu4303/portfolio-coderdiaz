import Container from "@/components/Container";
import GithubIcon from "@/components/icons/GitHub";
import TwitterIcon from "@/components/icons/Twitter";

export default function Hero() {
  return (
    <section className="pt-24 pb-12">
      <Container className="relative max-w-screen-lg">
        <span className="inline-block uppercase font-medium tracking-widest text-gray-400 mb-4">
          Hello, my name is Javier
        </span>
        <h1 className="font-display font-bold text-7xl text-white leading-tight mr-32 mb-4">
          I <span className="text-purple-400">build</span> digital products and <span className="text-purple-400">web</span> experiences
        </h1>
        <p className="text-xl text-gray-400 leading-loose mr-48 mb-14">
          I'm a Software Engineer and Indie Developer from Mexico City, interested in design systems, jamstack, user/dev experience and under engineering. My goal is create fast, simple and accesible web experiences for everyone.
        </p>
        <div className="flex text-white text-xl items-center space-x-3">
          <span className="inline-flex">You can find me on</span>
          <div className="flex space-x-3 text-gray-300 items-center">
            <a href="#" className="px-1 py-2" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="px-1 py-2" aria-label="Twitter">
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-300 rounded-full opacity-10 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </Container>
    </section>
  );
}
