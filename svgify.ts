if (Deno.args.length <= 0) {
  console.log("Needs an svg name arg");
}

const svgUrls = [];
if (Deno.args[1]) {
  svgUrls.push(
    Deno.args[1].startsWith("http")
      ? Deno.args[1]
      : `https://raw.githubusercontent.com/devicons/devicon/master/icons/${Deno.args[0]}/${Deno.args[1]}`
  );
} else {
  svgUrls.push(
    `https://raw.githubusercontent.com/devicons/devicon/master/icons/${Deno.args[0]}/${Deno.args[0]}-original.svg`
  );
  svgUrls.push(
    `https://raw.githubusercontent.com/devicons/devicon/master/icons/${Deno.args[0]}/${Deno.args[0]}-plain.svg`
  );
  svgUrls.push(
    `https://raw.githubusercontent.com/devicons/devicon/master/icons/${Deno.args[0]}/${Deno.args[0]}-original-wordmark.svg`
  );
  svgUrls.push(
    `https://raw.githubusercontent.com/devicons/devicon/master/icons/${Deno.args[0]}/${Deno.args[0]}-plain-wordmark.svg`
  );
}

let svgResp = undefined;
while (svgUrls.length > 0) {
  svgResp = await fetch(svgUrls.shift() as string);
  if (svgResp.ok) {
    break;
  }
}

if (!svgResp || !svgResp.ok) {
  Deno.exit(1);
}

let svg = await svgResp.text();

svg = svg.replace(">", " class={className}>");

function capitalize(s: string) {
  const string = s.toLowerCase();
  const chr = string.charAt(0);
  const trailing = string.slice(1);
  return chr.toUpperCase() + trailing;
}

const output = `
/** @jsx h */
import { h } from "preact";
import { SvgProps } from "./svg.d.ts";

const ${capitalize(Deno.args[0])} = ({ class: className }: SvgProps) => (
  ${svg}
);

export default ${capitalize(Deno.args[0])};
`;

await Deno.writeTextFile(
  `./components/svgs/${capitalize(Deno.args[0])}.tsx`,
  output
);

const prettier = Deno.run({
  cmd: [
    "npx",
    "prettier",
    "--write",
    `./components/svgs/${capitalize(Deno.args[0])}.tsx`,
  ],
});
await prettier.status();
