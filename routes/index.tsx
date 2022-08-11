/** @jsx h */
import { h } from "preact";
import Layout from "../components/Layout.tsx";
import Intro from "../components/sections/Intro.tsx";
import VotingIntro from "../components/sections/VotingIntro.tsx";
import Golang from "../components/sections/Golang.tsx";
import BGV from "../components/sections/BGV.tsx";
import Revonarchy from "../components/sections/Revonarchy.tsx";
import Judgement from "../components/sections/Judgement.tsx";
import SensorsAreDown from "../components/sections/SensorsAreDown.tsx";
import ICG from "../components/sections/ICG.tsx";
import BoatsAndBridges from "../components/sections/BoatsAndBridges.tsx";
import PuzzleSync from "../components/sections/PuzzleSync.tsx";
import DanyconSchedule from "../components/sections/DanyconSchedule.tsx";
import Museum from "../components/sections/Museum.tsx";
import Outro from "../components/sections/Outro.tsx";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <VotingIntro />
      <Golang />
      <BGV />
      <Revonarchy />
      <Judgement />
      <SensorsAreDown />
      <ICG />
      <BoatsAndBridges />
      <PuzzleSync />
      <DanyconSchedule />
      <Museum />
      <Outro />
    </Layout>
  );
}
