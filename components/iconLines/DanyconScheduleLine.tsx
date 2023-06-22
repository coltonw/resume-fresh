import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import NextJs from "../svgs/NextJs.tsx";
import Vercel from "../svgs/Vercel.tsx";
import Bulma from "../svgs/Bulma.tsx";
import Aws from "../svgs/Aws.tsx";
import { iconClassName } from "./util.ts";

const DanyconScheduleLine = () => (
  <SubHeading>
    <SubHeadingTitle>Convention Schedule</SubHeadingTitle>
    <IconLine>
      <LineDate>2022</LineDate>
      <LineIcon title="Next.js" href="https://nextjs.org/">
        <NextJs class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Vercel" href="https://vercel.com/home">
        <Vercel class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Bulma" href="https://bulma.io/">
        <Bulma class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
        <Aws class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default DanyconScheduleLine;
