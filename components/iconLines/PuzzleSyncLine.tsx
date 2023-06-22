import { tw } from "twind";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import Gatsby from "../svgs/Gatsby.tsx";
import React from "../svgs/React.tsx";
import Typescript from "../svgs/Typescript.tsx";
import Graphql from "../svgs/Graphql.tsx";
import Auth0 from "../svgs/Auth0.tsx";
import CircleCI from "../svgs/CircleCI.tsx";
import Aws from "../svgs/Aws.tsx";
import Serverless from "../svgs/Serverless.tsx";
import { iconClassName } from "./util.ts";

const PuzzleSyncLine = () => (
  <SubHeading>
    <SubHeadingTitle>PuzzleSync</SubHeadingTitle>
    <IconLine>
      <LineDate>2020</LineDate>
      <LineIcon title="Gatsby" href="https://www.gatsbyjs.com/">
        <Gatsby class={iconClassName()} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <React class={iconClassName()} />
      </LineIcon>
      <LineIcon title="TypeScript" href="https://www.typescriptlang.org/">
        <Typescript class={iconClassName()} />
      </LineIcon>
      <LineIcon title="GraphQL" href="https://graphql.org/">
        <Graphql class={`${iconClassName()} text-pink-600`} />
      </LineIcon>
      <LineIcon title="Auth0" href="https://auth0.com/">
        <Auth0 class={tw`${iconClassName()} text-orange-600`} />
      </LineIcon>
      <LineIcon title="CircleCI" href="https://circleci.com/">
        <CircleCI class={iconClassName()} />
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

export default PuzzleSyncLine;
