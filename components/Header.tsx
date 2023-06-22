import Github from "./svgs/Github.tsx";
import Wkc from "./svgs/Wkc.tsx";

const Header = () => {
  return (
    <>
      <header class="flex justify-between items-center px-4 py-3 text-base">
        <div class="flex items-center justify-between p-0">
          <div>
            <a href="/">
              <Wkc class="w-8 h-8 inline align-middle" />
              <span
                class="align-middle hidden sm:inline pl-2 text-l font-black text-blue-gray-400"
              >
                Will Colton's Side Project Museum
              </span>
            </a>
          </div>
        </div>
        <nav class="flex p-0">
          <a
            href="https://github.com/coltonw"
            class="block px-2 py-1 text-warmGray-600 rounded hover:text-warmGray-700"
            aria-label="Github"
          >
            <Github class="h-6 w-6" />
          </a>
        </nav>
      </header>

      <div
        class="mb-12 flex items-center justify-start px-4 text-base border-b-2 border-warmGray-200"
      >
        <div class="hidden sm:block px-2 py-1 text-warmGray-800">
          Implementations:
        </div>
        <a
          href="https://cra.willcolton.com/"
          class="block px-2 py-1 text-warmGray-600 font-semibold hover:text-warmGray-700"
        >
          CRA
        </a>
        <a
          href="https://fresh.willcolton.com"
          class="block -mb-[2px] px-2 pt-1 pb-[2px] text-warmGray-600 font-bold hover:text-warmGray-700 border-b-4 border-warmGray-600 hover:border-warmGray-700"
        >
          Deno Fresh
        </a>
        <a
          href="https://svelte.willcolton.com"
          class="block px-2 py-1 text-warmGray-600 font-semibold hover:text-warmGray-700"
        >
          Sveltekit
        </a>
      </div>
    </>
  );
};

export default Header;
