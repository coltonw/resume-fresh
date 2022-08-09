/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface EmbeddedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const EmbeddedImage = ({ src, alt, width, height }: EmbeddedImageProps) => {
  return (
    <img
      src={src}
      class={tw`border-2 border-warmGray-200 my-6`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default EmbeddedImage;
