import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridTitle = ({ children }: Props) => (
  <h3 className="text-2xl text-white font-bold my-6 text-center">{children}</h3>
);

export { GridTitle };
