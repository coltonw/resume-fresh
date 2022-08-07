/** @jsx h */
import { h } from "preact";
import Layout from "../components/Layout.tsx";
import Intro from "../components/sections/Intro.tsx";
import VotingIntro from "../components/sections/VotingIntro.tsx";
import Golang from "../components/sections/Golang.tsx";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <VotingIntro />
      <Golang />
    </Layout>
  );
}
