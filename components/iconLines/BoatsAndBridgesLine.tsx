import IconLine from "../IconLine.tsx";
import LineDate from "../LineDate.tsx";
import LineIcon from "../LineIcon.tsx";
import SubHeading from "../SubHeading.tsx";
import SubHeadingTitle from "../SubHeadingTitle.tsx";
import NodeJs from "../svgs/NodeJs.tsx";
import Babel from "../svgs/Babel.tsx";
import Webpack from "../svgs/Webpack.tsx";
import Unity from "../svgs/Unity.tsx";
import CSharp from "../svgs/CSharp.tsx";
import Rust from "../svgs/Rust.tsx";
import { iconClassName } from "./util.ts";

const BoatsAndBridgesLine = () => (
  <SubHeading>
    <SubHeadingTitle>Boats and Bridges</SubHeadingTitle>
    <IconLine>
      <LineDate>2020-2021</LineDate>
      <LineIcon title="Node.js" href="https://nodejs.org/en/">
        <NodeJs class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Lodash" href="https://lodash.com/">
        <div
          class="flex-none mx-2 text-black underline decoration-blue-600 decoration-2 font-bold"
          style={{
            textDecorationColor: "#3492FF",
            textDecorationThickness: "2px",
          }}
        >
          Lo
        </div>
      </LineIcon>
      <LineIcon title="Babel" href="https://babeljs.io/">
        <Babel class={`${iconClassName()} text-yellow-600`} />
      </LineIcon>
      <LineIcon title="Webpack" href="https://webpack.js.org/">
        <Webpack class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Unity" href="https://unity.com/">
        <Unity class={iconClassName()} />
      </LineIcon>
      <LineIcon
        title="C#"
        href="https://docs.microsoft.com/en-us/dotnet/csharp/"
      >
        <CSharp class={iconClassName()} />
      </LineIcon>
      <LineIcon title="Rust" href="https://www.rust-lang.org/">
        <Rust class={iconClassName()} />
      </LineIcon>
    </IconLine>
  </SubHeading>
);

export default BoatsAndBridgesLine;
