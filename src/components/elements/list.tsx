import clsx from "clsx";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  listType: "ul" | "ol";
  children:
    | React.ReactElement<typeof ListItem>
    | React.ReactElement<typeof ListItem>[];
  className?: string;
}

export const List = ({
  children,
  listType,
  className,
  ...listProps
}: ListProps) => {
  const ListTag = listType;

  return (
    <ListTag className={clsx("mb-5 pl-4 list-disc", className)} {...listProps}>
      {children}
    </ListTag>
  );
};

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className?: string;
}

export const ListItem = ({
  children,
  className,
  ...listItemProps
}: ListItemProps) => {
  return (
    <li className={clsx("text-sm md:text-base", className)} {...listItemProps}>
      {children}
    </li>
  );
};
