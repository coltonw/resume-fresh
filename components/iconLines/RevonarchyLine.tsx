import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import Bower from "../svgs/Bower.tsx";
import Koa from "../svgs/Koa.tsx";
import Less from "../svgs/Less.tsx";
import Gulp from "../svgs/Gulp.tsx";
import Ramda from "../svgs/Ramda.tsx";
import React from "../svgs/React.tsx";
import { iconClassName } from "./util.ts";

const RevonarchyLine = () => (
  <SubHeading>
    <SubHeadingTitle>Revonarchy</SubHeadingTitle>
    <IconLine>
      <LineDate>2015</LineDate>
      <LineIcon title="Bower" href="https://bower.io/">
        <Bower class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Koa" href="https://koajs.com/">
        <Koa class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Less" href="https://lesscss.org/">
        <Less class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Gulp" href="https://gulpjs.com/">
        <Gulp class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Ramda" href="https://ramdajs.com/">
        <Ramda class={iconClassName()} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <React class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default RevonarchyLine;
