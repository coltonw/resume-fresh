import { SvgProps } from "./svg.d.ts";

const Vercel = ({ class: className }: SvgProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class={className}
  >
    <title>Vercel</title>
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

export default Vercel;
