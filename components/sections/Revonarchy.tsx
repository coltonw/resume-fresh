/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import SectionHeading from "../SectionHeading.tsx";
import RevonarchyLine from "../iconLines/RevonarchyLine.tsx";
import Paragraph from "../Paragraph.tsx";
import Link from "../Link.tsx";
import EmbeddedVideo from "../../islands/EmbeddedVideo.tsx";

const Revonarchy = () => {
  return (
    <>
      <SectionHeading>No More Voting!</SectionHeading>
      <RevonarchyLine />
      <Paragraph>
        I got tired of my favorite games never getting picked, so I decided to
        move away from voting to let people just pick a game and then rotate who
        picks the game each time. The problem that quickly showed up was that
        some people would only show up rarely and yet got to pick just as often,
        Thus Revonarchy was born. (
        <Link href="https://github.com/coltonw/revonarchy">Source</Link>; site
        was never deployed)
      </Paragraph>
      <EmbeddedVideo
        webm={"/videos/revonarchy.webm"}
        mp4={"/videos/revonarchy.mp4"}
      />
      <Paragraph>
        Revonarchy was relatively short lived but I still learned some great
        stuff including Bower, Koa, Less, Gulp, Ramda, and most importantly
        React.
      </Paragraph>
    </>
  );
};

export default Revonarchy;
