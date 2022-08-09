/** @jsx h */
import { h } from "preact";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import NodeJs from "../svgs/NodeJs.tsx";
import Express from "../svgs/Express.tsx";
import Npm from "../svgs/Npm.tsx";
import MongoDB from "../svgs/MongoDB.tsx";
import Heroku from "../svgs/Heroku.tsx";
import Mocha from "../svgs/Mocha.tsx";
import TravisCI from "../svgs/TravisCI.tsx";
import Bootstrap from "../svgs/Bootstrap.tsx";
import { iconClassName } from "./util.ts";

const IndifferenceLine = () => (
  <SubHeading>
    <SubHeadingTitle>Indifference Engine</SubHeadingTitle>
    <IconLine>
      <LineDate>2014-2015</LineDate>
      <LineIcon title="Node.js" href="https://nodejs.org/en/">
        <NodeJs class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Express" href="https://expressjs.com/">
        <Express class={iconClassName()} />
      </LineIcon>
      <LineIcon title="npm" href="https://www.npmjs.com/">
        <Npm class={iconClassName()} />
      </LineIcon>
      <LineIcon title="MongoDB" href="https://www.mongodb.com/">
        <MongoDB class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Heroku" href="https://www.heroku.com/">
        <Heroku class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Mocha" href="https://mochajs.org/">
        <Mocha class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Travis CI" href="https://www.travis-ci.com/">
        <TravisCI class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Bootstrap" href="https://getbootstrap.com/">
        <Bootstrap class={iconClassName()} />
      </LineIcon>
      {/* <LineIcon title="Dust.js" href="https://www.dustjs.com/">
        <div
          class={tw`flex-none mx-2 text-stone-700`}
          style={{
            fontFamily: "Dosis,sans-serif",
            fontWeight: 100,
          }}
        >
          Dust.js
        </div>
      </LineIcon> */}
    </IconLine>
  </SubHeading>
);

export default IndifferenceLine;
