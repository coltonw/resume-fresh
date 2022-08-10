/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

const IconLine: FunctionalComponent = ({ children }) => (
  <div class={tw`flex flex-wrap flex-row items-center justify-start h-8`}>
    {children}
  </div>
);

export default IconLine;
