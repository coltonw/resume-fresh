/** @jsx h */
import { h } from "preact";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import Alexa from "../svgs/Alexa.tsx";
import Aws from "../svgs/Aws.tsx";
import Serverless from "../svgs/Serverless.tsx";
import Flow from "../svgs/Flow.tsx";
import { iconClassName } from "./util.ts";

const SensorsAreDownLine = () => (
  <SubHeading>
    <SubHeadingTitle>Sensors Are Down</SubHeadingTitle>
    <IconLine>
      <LineDate>2017</LineDate>
      <LineIcon
        title="Amazon Alexa"
        href="https://www.developer.amazon.com/en-US/alexa/"
      >
        <Alexa class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <Aws class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
        <Serverless class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Flow" href="https://flow.org/">
        <Flow class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default SensorsAreDownLine;
