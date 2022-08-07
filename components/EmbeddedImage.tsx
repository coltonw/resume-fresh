/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface EmbeddedImageProps {
  src: string;
  alt: string;
}

const EmbeddedImage = ({ src, alt }: EmbeddedImageProps) => {
  return (
    <img src={src} class={tw`border-2 border-warmGray-200 my-6`} alt={alt} />
  );
};

export default EmbeddedImage;
