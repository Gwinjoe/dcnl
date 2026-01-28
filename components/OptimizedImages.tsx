import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size?: "thumb" | "card" | "hero";
  priority?: boolean;
};

const SIZE_MAP = {
  thumb: 280,
  card: 400,
  hero: 1200,
};

export function OptimizedImage({
  src,
  alt,
  size = "card",
  priority = false,
}: Props) {
  const width = SIZE_MAP[size];

  const cloudinarySrc = src.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width},c_fill/`,
  );

  return (
    <Image
      src={cloudinarySrc}
      alt={alt}
      width={width}
      height={Math.round(width * 0.66)}
      priority={priority}
      className="rounded-lg object-cover"
    />
  );
}
