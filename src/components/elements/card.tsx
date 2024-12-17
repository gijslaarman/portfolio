import clsx from "clsx";

type CardProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export const Card = ({
  children,
  as: Component = "div",
  className,
}: CardProps) => (
  <Component
    className={clsx(
      "bg-slate-200 dark:bg-slate-900 border-slate-300 dark:border-slate-700 border p-4 rounded flex flex-col gap-4",
      className,
    )}
  >
    {children}
  </Component>
);
