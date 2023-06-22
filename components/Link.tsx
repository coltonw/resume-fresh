import { ComponentChildren } from "preact";

interface LinkProps {
  href?: string;
  onClick?: () => void;
  children: ComponentChildren;
}

const Link = ({ href, onClick, children }: LinkProps) => (
  <a
    href={href}
    onClick={onClick}
    class="text-warmGray-600 font-bold hover:underline cursor-pointer"
  >
    {children}
  </a>
);

export default Link;
