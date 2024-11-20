import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowWith, setWindowWidth] = useState();

  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowWith;
};
