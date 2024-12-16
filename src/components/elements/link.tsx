import clsx from "clsx";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternalLink?: boolean;
};

export const Link = ({
  href,
  isExternalLink,
  children,
  className,
}: LinkProps) => {
  return (
    <a
      href={href}
      className={clsx("text-highlight underline  inline-block", className)}
      target={isExternalLink ? "_blank" : undefined}
    >
      {children}
    </a>
  );
};
