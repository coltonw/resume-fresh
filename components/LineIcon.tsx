import { ComponentChildren } from "preact";

interface LineIconProps {
  title: string;
  href: string;
  children: ComponentChildren;
}

const LineIcon = ({ title, href, children }: LineIconProps) => {
  return (
    <a title={title} href={href}>
      {children}
    </a>
  );
};

export default LineIcon;
