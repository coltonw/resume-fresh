/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

const Paragraph = ({ children }: { children: ComponentChildren }) => (
  <div class={tw`my-4 text-warmGray-800`}>{children}</div>
);

export default Paragraph;
