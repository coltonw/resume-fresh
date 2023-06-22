import Paragraph from "../Paragraph.tsx";
import Link from "../Link.tsx";

const Intro = () => {
  return (
    <>
      <Paragraph>
        Welcome to my space. Let me tell you about some of the stuff I have
        worked on.
      </Paragraph>
      <Paragraph>
        As a learning exercise, I have implemented this site in a few different
        UI frameworks. This version is the{" "}
        <Link href="https://fresh.deno.dev/">Deno Fresh</Link> implementation.
      </Paragraph>
    </>
  );
};

export default Intro;
