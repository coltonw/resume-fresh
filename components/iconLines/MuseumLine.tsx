import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import Deno from "../svgs/Denojs.tsx";
import Fresh from "../svgs/Fresh.tsx";
import Tailwindcss from "../svgs/TailwindCss.tsx";
import { iconClassName } from "./util.ts";

const MuseumLine = () => (
  <SubHeading>
    <SubHeadingTitle>Deno Fresh</SubHeadingTitle>
    <IconLine>
      <LineDate>2022</LineDate>
      <LineIcon title="Deno" href="https://deno.land/">
        <Deno class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Fresh" href="https://fresh.deno.dev/">
        <Fresh class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Tailwind CSS" href="https://tailwindcss.com/">
        <Tailwindcss class={`${iconClassName()} text-sky-400`} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default MuseumLine;
