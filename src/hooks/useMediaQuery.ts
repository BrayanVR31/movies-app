import { useState, useEffect } from "react";

const getMatchedMedia = (query: string) => {
  const matchedQuery = window.matchMedia(query);
  return matchedQuery.matches;
};

const useMediaQuery = (query: string) => {
  const [isMatched, setIsMatched] = useState(() => getMatchedMedia(query));
  useEffect(() => {
    const handleResize = () => {
      setIsMatched(() => getMatchedMedia(query));
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, []);
  return isMatched;
};

export { useMediaQuery };
