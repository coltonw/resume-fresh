/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

interface LinkProps {
  href?: string;
  onClick?: () => void;
  children: ComponentChildren;
}

const Link = ({ href, onClick, children }: LinkProps) => (
  <a
    href={href}
    onClick={onClick}
    class={tw`text-warmGray-600 font-bold hover:underline cursor-pointer`}
  >
    {children}
  </a>
);

export default Link;
