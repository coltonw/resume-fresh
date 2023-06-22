import { FunctionalComponent } from "preact";
const SectionHeading: FunctionalComponent = ({ children }) => (
  <h1 class="mt-12 mb-4 text-2xl font-black text-warmGray-800">
    {children}
  </h1>
);

export default SectionHeading;
