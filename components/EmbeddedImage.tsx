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
      class="border-2 border-warmGray-200 my-6"
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default EmbeddedImage;
