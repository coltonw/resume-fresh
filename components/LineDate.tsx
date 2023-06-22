import { FunctionalComponent } from "preact";
const LineDate: FunctionalComponent = ({ children }) => (
  <>
    <div class="mr-2 text-sm text-warmGray-800 font-semibold">
      {children}
    </div>
    <div class="w-2 border-t-2 border-warmGray-400" />
  </>
);

export default LineDate;
