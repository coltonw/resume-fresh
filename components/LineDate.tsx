/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, FunctionalComponent } from "preact";
import { tw } from "@twind";

const LineDate: FunctionalComponent = ({ children }) => (
  <>
    <div class={tw`mr-2 text-sm text-warmGray-800 font-semibold`}>
      {children}
    </div>
    <div class={tw`w-2 border-t-2 border-warmGray-400`} />
  </>
);

export default LineDate;
