import { ReactNode, useRef, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const DropdownItem = ({ children }: Props) => {
  const item = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      const element = event.currentTarget as Element;
      const clientRect = element.getBoundingClientRect();
      const subMenu = element.querySelector("[data-dropdown-type=sub-menu]");
      subMenu?.setAttribute(
        "style",
        `
          top: auto;
            margin-top: -${clientRect.height}px;
            left: 100%;
      `
      );
    };
    if (item.current) {
      const subMenu = item.current.querySelector(
        "[data-dropdown-type=sub-menu]"
      );
      if (subMenu) item.current.addEventListener("mouseover", handleMouseOver);
      return () =>
        item.current?.removeEventListener("mouseover", handleMouseOver);
    }
  }, []);
  return (
    <li ref={item} className="static group/dropdown my-2">
      {children}
    </li>
  );
};

export { DropdownItem };
