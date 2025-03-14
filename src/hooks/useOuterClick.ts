import { useState, RefObject, useEffect } from "react";

const useOuterClick = (element: RefObject<Node>) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const isChildNode = element.current.contains(event.target as Node);
      setIsClicked(!(isChildNode || event.target === element.current));
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isClicked]);
  const watchOnClick = (cb: () => void) =>
    useEffect(() => {
      if (!isClicked) return;
      cb && cb();
    }, [isClicked]);
  return { isOuter: isClicked, watchOnClick };
};

export { useOuterClick };
