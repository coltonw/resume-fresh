/** @jsx h */
import { h, FunctionalComponent } from "preact";
import { tw } from "@twind";

const SectionHeading: FunctionalComponent = ({ children }) => (
  <h1 class={tw`mt-12 mb-4 text-2xl font-black text-warmGray-800`}>
    {children}
  </h1>
);

export default SectionHeading;
