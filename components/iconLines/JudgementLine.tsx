/** @jsx h */
import { h } from "preact";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import { iconClassName } from "./util.ts";

const JudgementLine = () => (
  <SubHeading>
    <SubHeadingTitle>Majority Judgment</SubHeadingTitle>
    <IconLine>
      <LineDate>2019</LineDate>
      {/* <LineIcon title="elixir" href="https://elixir-lang.org/">
        <ElixirLogo className={iconClassName()} />
      </LineIcon>
      <LineIcon
        title="Phoenix Framework"
        href="https://www.phoenixframework.org/"
      >
        <PhoenixLogo className={`${iconClassName()} w-12`} />
      </LineIcon>
      <LineIcon title="CircleCI" href="https://circleci.com/">
        <CircleCILogo className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <FaAws className={iconClassName()} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <DiReact className={iconClassName()} style={{ color: "#61dafb" }} />
      </LineIcon>
      <LineIcon title="nivo" href="https://nivo.rocks/">
        <NivoLogo className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Bulma" href="https://bulma.io/">
        <BulmaLogo className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Webpack" href="https://webpack.js.org/">
        <WebpackLogo className={iconClassName()} />
      </LineIcon> */}
    </IconLine>
  </SubHeading>
);

export default JudgementLine;
