import { SvgProps } from "./svg.d.ts";

const Bulma = ({ class: className }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    class={className}
  >
    <path
      fill="#00D1B2"
      d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"
    />
  </svg>
);

export default Bulma;
