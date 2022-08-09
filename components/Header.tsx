/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Github from "./svgs/Github.tsx";

const Header = () => {
  return (
    <header
      class={tw`flex justify-between items-center px-4 py-3 mb-12 text-base`}
    >
      <div class={tw`flex items-center justify-between p-0`}>
        <div>
          <a href="/">
            <img
              class={tw`h-8 inline align-middle`}
              src="/logo.svg"
              alt="Will Colton Logo"
              width={32}
              height={32}
            />
            <span
              class={tw`align-middle hidden sm:inline pl-2 text-l font-black text-blue-gray-400`}
            >
              Will Colton's Side Project Museum
            </span>
          </a>
        </div>
      </div>
      <nav class={`flex p-0`}>
        {/*<a
          href="https://cra.willcolton.com/"
          class={tw`block px-2 py-1 text-warmGray-600 font-semibold rounded hover:text-warmGray-700`}
        >
          CRA
        </a>
        <a
          href="https://next.willcolton.com"
          class={tw`mt-1 block px-2 py-1 text-warmGray-600 font-semibold rounded hover:text-warmGray-700 sm:mt-0 sm:ml-2`}
        >
          Next.js
        </a>
        <a
          href="https://svelte.willcolton.com"
          class={tw`block px-2 py-1 text-warmGray-600 font-semibold rounded hover:text-warmGray-700`}
        >
          Svelte
        </a>*/}
        <a
          href="https://github.com/coltonw"
          class={tw`block px-2 py-1 text-warmGray-600 rounded hover:text-warmGray-700`}
          aria-label="Github"
        >
          {/* <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            class={tw`h-6 w-6 inline align-bottom`}
          /> */}
          <Github class={tw`h-6 w-6`} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
