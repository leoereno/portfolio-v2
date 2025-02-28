import { ReactNode } from "react";
import "./category.css";

export default function Category({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="category">
      <p className="category-title">{title}</p>
      <div className="items-container">{children}</div>
    </div>
  );
}
