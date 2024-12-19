import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const headingVariants = cva("font-heading whitespace-pre-wrap", {
  variants: {
    size: {
      h1: "text-md font-regular md:text-4xl lg:text-5xl",
      h2: "text-md font-bold md:text-2xl",
      h3: "text-sm font-bold md:text-lg",
      h4: "text-sm font-bold md:text-base",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4"; // Currently not going deeper than h4
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const Heading = ({
  as: Component = "h1",
  size,
  className,
  children,
  id,
}: HeadingProps) => (
  <Component
    className={clsx(headingVariants({ size: size || Component }), className)}
    id={id}
  >
    {children}
  </Component>
);
