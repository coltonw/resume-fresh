/** @jsx h */
import { h } from "preact";
import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import NodeJs from "../svgs/NodeJs.tsx";
import TravisCI from "../svgs/TravisCI.tsx";
import { iconClassName } from "./util.ts";

const IndifferenceLine = () => (
  <SubHeading>
    <SubHeadingTitle>Indifference Engine</SubHeadingTitle>
    <IconLine>
      <LineDate>2014-2015</LineDate>
      <LineIcon title="Node.js" href="https://nodejs.org/en/">
        <NodeJs class={iconClassName()} />
      </LineIcon>
      {/* <LineIcon title="Express" href="https://expressjs.com/">
        <div
          className="flex-none mx-2 text-stone-700"
          style={{
            fontFamily: "helvetica neue,open sans,sans-serif",
            fontWeight: 100,
          }}
        >
          ex
        </div>
      </LineIcon>
      <LineIcon title="npm" href="https://www.npmjs.com/">
        <DiNpm className={`${iconClassName()} text-red-600`} />
      </LineIcon>
      <LineIcon title="MongoDB" href="https://www.mongodb.com/">
        <MongoDBLogo className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Heroku" href="https://www.heroku.com/">
        <DiHeroku className={iconClassName()} style={{ color: "#79589F" }} />
      </LineIcon>
      <LineIcon title="Mocha" href="https://mochajs.org/">
        <MochaLogo className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Travis CI" href="https://www.travis-ci.com/">
        <TravisCI className={iconClassName()} />
      </LineIcon>
      <LineIcon title="Bootstrap" href="https://getbootstrap.com/">
        <DiBootstrap className={iconClassName()} style={{ color: "#7952b3" }} />
      </LineIcon>
      <LineIcon title="Dust.js" href="https://www.dustjs.com/">
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
