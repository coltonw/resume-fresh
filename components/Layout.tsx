/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, FunctionalComponent } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "./Header.tsx";
import { tw } from "@twind";

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <>
      <Head>
        <title>Will Colton's Side Project Museum</title>
        <meta
          content="Will Colton's digital museum of side projects"
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/all.min.css"
        ></link>
      </Head>

      <div class={tw`max-w-screen-md mx-auto text-lg font-sans p-2`}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
