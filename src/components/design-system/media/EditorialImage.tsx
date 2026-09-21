import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

export type EditorialImageVariant =
  | "portrait"
  | "cinematic"
  | "framed"
  | "mask-fade"
  | "plain";

export interface EditorialImageProps extends Omit<ImageProps, "className"> {
  variant?: EditorialImageVariant;
  className?: string;
  wrapperClassName?: string;
}

const variantWrapper: Record<EditorialImageVariant, string> = {
  portrait: "gj-image-portrait",
  cinematic: "gj-image-cinematic",
  framed: "gj-image-framed overflow-hidden",
  "mask-fade": "gj-image-mask-fade overflow-hidden",
  plain: "",
};

export function EditorialImage({
  variant = "plain",
  className,
  wrapperClassName,
  alt,
  ...props
}: EditorialImageProps) {
  const wrap = variantWrapper[variant];

  if (!wrap) {
    return <Image alt={alt} className={className} {...props} />;
  }

  return (
    <div className={cn("relative", wrap, wrapperClassName)}>
      <Image alt={alt} className={cn("object-cover", className)} {...props} />
    </div>
  );
}
