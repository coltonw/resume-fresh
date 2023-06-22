import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import Elixir from "../svgs/Elixir.tsx";
import Phoenix from "../svgs/Phoenix.tsx";
import CircleCI from "../svgs/CircleCI.tsx";
import Aws from "../svgs/Aws.tsx";
import React from "../svgs/React.tsx";
import Nivo from "../svgs/Nivo.tsx";
import Bulma from "../svgs/Bulma.tsx";
import Webpack from "../svgs/Webpack.tsx";
import { iconClassName } from "./util.ts";

const JudgementLine = () => (
  <SubHeading>
    <SubHeadingTitle>Majority Judgment</SubHeadingTitle>
    <IconLine>
      <LineDate>2019</LineDate>
      <LineIcon title="elixir" href="https://elixir-lang.org/">
        <Elixir class={iconClassName()} />
      </LineIcon>
      <LineIcon
        title="Phoenix Framework"
        href="https://www.phoenixframework.org/"
      >
        <Phoenix class={`${iconClassName()} w-12`} />
      </LineIcon>
      <LineIcon title="CircleCI" href="https://circleci.com/">
        <CircleCI class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <Aws class={iconClassName()} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <React class={iconClassName()} />
      </LineIcon>
      <LineIcon title="nivo" href="https://nivo.rocks/">
        <Nivo class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Bulma" href="https://bulma.io/">
        <Bulma class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Webpack" href="https://webpack.js.org/">
        <Webpack class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default JudgementLine;
