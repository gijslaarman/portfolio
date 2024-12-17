import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const sectionVariants = cva("py-10 md:py-14 lg:py-20", {
  variants: {
    isMuted: {
      true: "bg-slate-200 dark:bg-slate-900",
      false: "",
    },
  },
  defaultVariants: {
    isMuted: false,
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
  isMuted?: boolean;
  withContainer?: boolean;
  className?: string;
}

export const Section = ({ children, isMuted, className }: SectionProps) => {
  return (
    <section className={clsx(sectionVariants({ isMuted }), className)}>
      {children}
    </section>
  );
};
