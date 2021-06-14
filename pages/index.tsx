import Image from "next/image";
import { ArrowRightIcon, TemplateIcon } from "@heroicons/react/solid";
import { CubeIcon, UsersIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import BaseLayout from "@/layouts/Base";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Caption from "@/components/Caption";

export default function Homepage() {
  return <BaseLayout>
    <Hero />
    <section className="py-12">
      <Container className="max-w-screen-lg">
        <Caption className="mb-5">Featured Content</Caption>
        <div className="grid grid-cols-12 gap-5">
          <div className="relative p-5 col-span-8 h-96 rounded-lg">
            <div className="relative z-10 flex flex-col">
              <span className="inline-block font-bold text-white text-2xl">
                How to create an awesome setup
              </span>
              <p className="text-lg leading-relaxed text-white">Why Is It Important to Have an Ergonomic Workspace at Home</p>
            </div>

            {/* Background */}
            <Image
              className="rounded-lg z-0"
              layout="fill"
              objectFit="cover"
              src="/assets/images/blog-entry-1.png" />
            <div className="absolute w-full h-full z-0 top-0 left-0 rounded-lg bg-gradient-to-b from-purple-600 to-transparent" />
          </div>
          <div className="relative p-5 col-span-4 h-96 rounded-lg">
            <div className="relative z-10 flex flex-col">
              <span className="inline-block font-bold text-white text-2xl">
                Photo Journal
              </span>
              <p className="text-lg leading-relaxed text-white">Pixels and colors</p>
            </div>

            {/* Background */}
            <Image
              className="rounded-lg z-0"
              layout="fill"
              objectFit="cover"
              src="/assets/images/blog-entry-2.png" />
            <div className="absolute w-full h-full z-0 top-0 left-0 rounded-lg bg-gradient-to-b from-yellow-500 to-transparent" />
          </div>
          <div className="px-8 py-10 col-span-4 bg-gray-800 rounded-lg">
            <CubeIcon className="w-8 h-8 text-purple-400 mb-5" />
            <span className="inline-flex text-lg text-white font-medium mb-3">
              Software Development
            </span>
            <p className="leading-relaxed text-gray-400 mb-6">
              I build incredible software experiences using the best tools and technologies according to your product.
            </p>
            <a href="#" className="inline-flex space-x-4 items-center font-medium text-purple-400 uppercase tracking-wider text-sm">
              <span className="inline-block">Get a quote</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="px-8 py-10 col-span-4 bg-gray-800 rounded-lg">
            <TemplateIcon className="w-8 h-8 text-pink-300 mb-5" />
            <span className="inline-flex text-lg text-white font-medium mb-3">
              User Interfaces
            </span>
            <p className="leading-relaxed text-gray-400 mb-6">
            I develop attractive and user-friendly products, as well as pleasant experiences that allow users to achieve their goals.
            </p>
            <a href="#" className="inline-flex space-x-4 items-center font-medium text-pink-300 uppercase tracking-wider text-sm">
              <span className="inline-block">Go to Dribbble</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="px-8 py-10 col-span-4 bg-gray-800 rounded-lg">
            <UsersIcon className="w-8 h-8 text-yellow-400 mb-5" />
            <span className="inline-flex text-lg text-white font-medium mb-3">
              Mentorship
            </span>
            <p className="leading-relaxed text-gray-400 mb-6">
              Each person has a story and a goal. I will help you achieve your professional growth through software.
            </p>
            <a href="#" className="inline-flex space-x-4 items-center font-medium text-yellow-400 uppercase tracking-wider text-sm">
              <span className="inline-block">Schedule a Call</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
    <section className="pt-24 pb-12">
      <Container className="max-w-screen-lg">
        <div className="flex items-center justify-between mb-5">
          <Caption>Recent Writing</Caption>
          <a href="#" className="inline-flex items-center space-x-2 text-gray-300">
            <span className="inline-block uppercase tracking-wide font-medium">Read all</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex space-y-1 flex-col px-6 py-5 bg-gray-800 w-full rounded-lg">
            <span className="inline-block font-bold text-xl text-white">2020 in review</span>
            <p className="text-gray-400 leading-relaxed">
              Looking back on 2021 and setting goals for the next year.
            </p>
            <span className="inline-block text-gray-500">January 20, 2021</span>
          </div>
          <div className="flex space-y-1 flex-col px-6 py-5 bg-gray-800 w-full rounded-lg">
            <span className="inline-block font-bold text-xl text-white">How we increse the autonomy of the dev team</span>
            <p className="text-gray-400 leading-relaxed">
              We went from Scrum to Shape Up so that developing was much more  than taking tasks.
            </p>
            <span className="inline-block text-gray-500">June 01, 2021</span>
          </div>
        </div>
      </Container>
    </section>
    <section className="py-12">
      <Container className="max-w-screen-lg">
        <div className="flex items-center space-x-5 mb-4">
          <h2 className="font-bold text-white text-3xl">Some things I've Built</h2>
          <span className="inline-block w-64 h-1 rounded-full bg-gray-500" />
        </div>
        <p className="leading-relaxed w-1/2 text-gray-400 text-lg mb-10">
          This is a just part of them, have a look at my work! If you have an idea, <a href="#" className="font-medium text-gray-300">contact me</a>.
        </p>
        <div className="flex flex-col space-y-20">
          <div className="flex relative">
            <div className="relative z-0 flex flex-shrink-0 items-center w-4/6 h-96">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                src="/assets/images/expanish-image.png" />
            </div>
            <div className="min-h-96 absolute z-10 right-0 flex flex-col justify-center items-end w-1/2">
              <div className="flex flex-col items-end bg-gray-800 px-6 py-5 rounded-lg shadow-lg">
                <span className="inline-block text-sm font-medium text-purple-400 uppercase tracking-wider mb-1">
                  Case Study
                </span>
                <span className="inline-block text-2xl font-bold text-right text-white mb-2">
                  Improving performance: Expanish.com
                </span>
                <p className="text-gray-300 text-right mb-3">
                  We raise the professional level of our students through an accelerated and flexible learning model.
                </p>
                <div className="flex space-x-4 mb-2">
                  <span className="inline-block text-gray-500">Next.js</span>
                  <span className="inline-block text-gray-500">Performance</span>
                  <span className="inline-block text-gray-500">Web Vitals</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="inline-block text-gray-300">
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative justify-end">
            <div className="min-h-96 absolute z-10 left-0 flex flex-col justify-center items-start w-1/2">
              <div className="flex flex-col items-start bg-gray-800 px-6 py-5 rounded-lg shadow-lg">
                <span className="inline-block text-sm font-medium text-purple-400 uppercase tracking-wider mb-1">
                  Featured Project
                </span>
                <span className="inline-block text-2xl font-bold text-left text-white mb-2">
                  Neureta Website
                </span>
                <p className="text-gray-300 text-left mb-3">
                  We promote teacher training for a better evaluation and intervention in the effects of child development.
                </p>
                <div className="flex space-x-4 mb-2">
                  <span className="inline-block text-gray-500">Gatbsy</span>
                  <span className="inline-block text-gray-500">Stripe</span>
                  <span className="inline-block text-gray-500">E-commerce</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="inline-block text-gray-300">
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative z-0 flex flex-shrink-0 items-center w-4/6 h-96">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                src="/assets/images/neureta-image.png" />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <section className="pt-12 pb-16">
      <Container className="max-w-screen-lg">
        <div className="flex items-center space-x-5 mb-4">
          <h2 className="font-bold text-white text-3xl">Open Source</h2>
          <span className="inline-block w-64 h-1 rounded-full bg-gray-500" />
        </div>
        <p className="leading-relaxed w-1/2 text-gray-400 text-lg mb-10">
          Working in the open, interacting with the community & building projects that are accessible to everyone fill me with joy.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 px-6 py-5 bg-purple-300 rounded-lg">
            <span className="inline-block text-purple-900 font-bold text-xl mb-2">Gravity Theme</span>
            <p className="text-purple-900">
              A Visual Studio Code theme for for dawn lovers with accesible colors.
            </p>
          </div>
          <div className="col-span-4 px-6 py-5 bg-gray-800 rounded-lg">
            <span className="inline-block text-white font-bold text-xl mb-2">Gravity Theme</span>
            <p className="text-gray-400">
              A Visual Studio Code theme for for dawn lovers with accesible colors.
            </p>
          </div>
          <div className="col-span-4 px-6 py-5 bg-gray-800 rounded-lg">
            <span className="inline-block text-white font-bold text-xl mb-2">Gravity Theme</span>
            <p className="text-gray-400">
              A Visual Studio Code theme for for dawn lovers with accesible colors.
            </p>
          </div>
          <div className="col-span-4 px-6 py-5 bg-gray-800 rounded-lg">
            <span className="inline-block text-white font-bold text-xl mb-2">Gravity Theme</span>
            <p className="text-gray-400">
              A Visual Studio Code theme for for dawn lovers with accesible colors.
            </p>
          </div>
          <div className="col-span-4 px-6 py-5 bg-gray-800 rounded-lg">
            <span className="inline-block text-white font-bold text-xl mb-2">Gravity Theme</span>
            <p className="text-gray-400">
              A Visual Studio Code theme for for dawn lovers with accesible colors.
            </p>
          </div>
        </div>
      </Container>
    </section>
  </BaseLayout>;
}