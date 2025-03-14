import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridContainer = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_190px)] justify-between gap-x-4 gap-y-4">
      {children}
    </div>
  );
};

export { GridContainer };
