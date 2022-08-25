/** @jsx h */
import { h } from "preact";
import Layout from "../components/Layout.tsx";
import Intro from "../components/sections/Intro.tsx";
import BoatsAndBridgesLine from "../components/iconLines/BoatsAndBridgesLine.tsx";
import DanyconScheduleLine from "../components/iconLines/DanyconScheduleLine.tsx";
import GolangLine from "../components/iconLines/GolangLine.tsx";
import IcgScalaJsLine from "../components/iconLines/IcgScalaJsLine.tsx";
import IcgUnityLine from "../components/iconLines/IcgUnityLine.tsx";
import IndifferenceLine from "../components/iconLines/IndifferenceLine.tsx";
import JudgementLine from "../components/iconLines/JudgementLine.tsx";
import MuseumLine from "../components/iconLines/MuseumLine.tsx";
import PuzzleSyncLine from "../components/iconLines/PuzzleSyncLine.tsx";
import RevonarchyLine from "../components/iconLines/RevonarchyLine.tsx";
import SensorsAreDownLine from "../components/iconLines/SensorsAreDownLine.tsx";

const Tldr = () => (
  <Layout>
    <Intro />
    <GolangLine />
    <IndifferenceLine />
    <RevonarchyLine />
    <SensorsAreDownLine />
    <IcgScalaJsLine />
    <IcgUnityLine />
    <JudgementLine />
    <PuzzleSyncLine />
    <BoatsAndBridgesLine />
    <DanyconScheduleLine />
    <MuseumLine />
  </Layout>
);

export default Tldr;
