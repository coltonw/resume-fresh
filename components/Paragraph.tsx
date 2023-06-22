import { ComponentChildren } from "preact";
const Paragraph = ({ children }: { children: ComponentChildren }) => (
  <div class="my-4 text-warmGray-800">{children}</div>
);

export default Paragraph;
