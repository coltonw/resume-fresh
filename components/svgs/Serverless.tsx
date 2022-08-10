/** @jsx h */
import { h } from "preact";
import { SvgProps } from "./svg.d.ts";

const Serverless = ({ class: className }: SvgProps) => (
  <svg
    width="94"
    height="150"
    viewBox="0 0 94 150"
    xmlns="http://www.w3.org/2000/svg"
    class={className}
  >
    <g stroke="#FD5750" stroke-width="5" fill="none" fill-rule="evenodd">
      <path d="m71.945 54.462 16.89-28.29.234-21.943L88.804 4C62.162 26.69 30.67 53.882 4.027 76.572c.04.086.03 4.45-.027 13.093l31.491-5.144c-10.875 17.823-22.271 37.303-22.271 37.303L13.29 144 91.11 73.904l-.239-21.563s-14.033 1.548-18.927 2.12Z" />
      <path
        d="M56.23 57.378c10.687-1.25 32.548-3.977 32.548-3.805 0 .17-50.054 45.34-74.928 67.871l-.235-.194 32.563-53.352-.221-.332-37.29 5.67C35.147 50.349 87.565 6.333 87.565 6.333c.053.137-21.334 34.352-31.609 50.61l.274.435Z"
        fill="#FD5750"
      />
    </g>
  </svg>
);

export default Serverless;
