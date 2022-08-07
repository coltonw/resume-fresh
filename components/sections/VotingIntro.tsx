/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import SectionHeading from "../SectionHeading.tsx";
import Paragraph from "../Paragraph.tsx";

const VotingIntro = () => {
  return (
    <>
      <SectionHeading>Voting</SectionHeading>
      <Paragraph>
        I have this crazed obsession with voting methods. I just wanted to get
        the best result when voting on a game for board game night, but maybe I
        went a bit too far...
      </Paragraph>
    </>
  );
};

export default VotingIntro;
