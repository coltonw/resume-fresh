import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import ScalaJs from "../svgs/ScalaJs.tsx";
import { iconClassName } from "./util.ts";

const IcgScalaJsLine = () => (
  <SubHeading>
    <SubHeadingTitle>Scala.js</SubHeadingTitle>
    <IconLine>
      <LineDate>2018</LineDate>
      <LineIcon title="Scala.js" href="https://www.scala-js.org/">
        <ScalaJs class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default IcgScalaJsLine;
