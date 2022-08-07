/** @jsx h */
import { h } from "preact";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import { iconClassName } from "./util.ts";

const RevonarchyLine = () => (
  <SubHeading>
    <SubHeadingTitle>Revonarchy</SubHeadingTitle>
    <IconLine>
      <LineDate>2015</LineDate>
      {/* <LineIcon title="Bower" href="https://bower.io/">
        <DiBower className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Koa" href="https://koajs.com/">
        <div
          className="flex-none mx-2 text-stone-700"
          style={{
            fontFamily: "italiana,sans-serif",
          }}
        >
          koa
        </div>
      </LineIcon>
      <LineIcon title="Less" href="https://lesscss.org/">
        <FaLess className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Gulp" href="https://gulpjs.com/">
        <DiGulp className={iconClassName()} style={{ color: "#DB4446" }} />
      </LineIcon>
      <LineIcon title="Ramda" href="https://ramdajs.com/">
        <RamdaLogo className={iconClassName()} />
      </LineIcon>
      <LineIcon title="React" href="https://reactjs.org/">
        <DiReact className={iconClassName()} style={{ color: "#61dafb" }} />
      </LineIcon> */}
    </IconLine>
  </SubHeading>
);

export default RevonarchyLine;
