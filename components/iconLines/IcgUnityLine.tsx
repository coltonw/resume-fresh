/** @jsx h */
import { h } from "preact";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import Unity from "../svgs/Unity.tsx";
import CSharp from "../svgs/CSharp.tsx";
import Python from "../svgs/Python.tsx";
import Aws from "../svgs/Aws.tsx";
import Serverless from "../svgs/Serverless.tsx";
import { iconClassName } from "./util.ts";

const IcgUnityLine = () => (
  <SubHeading>
    <SubHeadingTitle>Unity</SubHeadingTitle>
    <IconLine>
      <LineDate>2019</LineDate>
      <LineIcon title="Unity" href="https://unity.com/">
        <Unity class={iconClassName()} />
      </LineIcon>
      <LineIcon
        title="C#"
        href="https://docs.microsoft.com/en-us/dotnet/csharp/"
      >
        <CSharp class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Python" href="https://www.python.org/">
        <Python class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <Aws class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
        <Serverless class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default IcgUnityLine;
