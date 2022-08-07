/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

const SubHeading: FunctionalComponent = ({ children }) => (
  <div class={tw`mt-8 mb-4 block justify-between lg:flex`}>{children}</div>
);

export default SubHeading;
