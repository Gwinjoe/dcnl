import { ComponentExample } from "@/components/component-example";
import { OptimizedImage } from "@/components/OptimizedImages";

export default function Page() {
  return (
    <>
      <OptimizedImage
        src="https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566261/IMG-20251015-WA0003_wwzihd.jpg"
        alt="Hero Image"
        size="hero"
      />
      <ComponentExample />
    </>
  );
}

