if (Deno.args.length <= 0) {
  console.log("Needs an svg name arg");
}

const svgFilename = Deno.args[1] || `${Deno.args[0]}-original.svg`;

const svgResp = await fetch(
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${Deno.args[0]}/${svgFilename}`
);

if (!svgResp.ok) {
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

Deno.run({
  cmd: [
    "npx",
    "prettier",
    "--write",
    `./components/svgs/${capitalize(Deno.args[0])}.tsx`,
  ],
});
