import { useLocation } from "react-router";

export const usePathname = (...searchPaths: string[]) => {
  const location = useLocation();
  const locationPaths = location.pathname.split("/");
  return searchPaths.find((searchPath) => locationPaths.includes(searchPath));
};
