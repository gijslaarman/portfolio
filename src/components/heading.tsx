import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const headingVariants = cva("font-regular whitespace-pre-wrap", {
  variants: {
    level: {
      h1: "text-md md:text-4xl lg:text-5xl",
      h2: "text-md font-bold md:text-2xl",
      h3: "text-sm font-bold md:text-lg",
      h4: "text-xl md:text-2xl",
    },
  },
  defaultVariants: {
    level: "h2",
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
  level,
  className,
  children,
  id,
}: HeadingProps) => (
  <Component
    className={clsx(headingVariants({ level: level || Component }), className)}
    id={id}
  >
    {children}
  </Component>
);
