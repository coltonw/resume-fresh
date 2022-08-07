/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

const IconLine: FunctionalComponent = ({ children }) => (
  <div class={tw`flex flex-wrap flex-row items-center justify-start`}>
    {children}
  </div>
);

export default IconLine;
