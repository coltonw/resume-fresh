import { SvgProps } from "./svg.d.ts";

const Flow = ({ class: className }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 252.33 252.33"
    class={className}
  >
    <g class="flow-logo-mark">
      <path fill="#ffca20" opacity=".7" d="m224.74 109-84.11-84.1h84.11z" />
      <path fill="#ffca20" opacity=".7" d="M81.72 0h47.68l36.44 36.43H81.72z" />
      <path
        fill="#ffcf39"
        opacity=".9"
        d="M84.45 84.12.34 0h101.13v84.11zm73.89 84.1 84.11 84.11h-84.11z"
      />
      <path
        fill="#ffe490"
        opacity=".7"
        d="m101.47 168.23-84.1-84.12h84.11v84.11zm90.58-42.57L125 58.57h67.08zm7.84 118.84-76.28-76.27h76.28z"
      />
      <path fill="#fcbc7c" opacity=".9" d="m101.47 67-67-67h67z" />
      <path
        fill="#f9a040"
        opacity=".8"
        d="m123.95 168.22 84.11 84.11h-84.11z"
      />
      <path fill="#f9a040" opacity=".7" d="m209.08 201.8-84-84h84z" />
      <path fill="#ffcf39" opacity=".9" d="m125 58.57 83.09 83.09H125z" />
      <path fill="#ffc737" opacity=".7" d="M101.47 252 0 150.51h101.47V252z" />
    </g>
  </svg>
);

export default Flow;
