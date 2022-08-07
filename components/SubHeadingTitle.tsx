/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

const SubHeadingTitle: FunctionalComponent = ({ children }) => (
  <h2 class={tw`text-l font-black text-warmGray-800`}>{children}</h2>
);

export default SubHeadingTitle;
