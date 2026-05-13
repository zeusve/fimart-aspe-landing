import { useState, useEffect } from "react";

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    check();
  }, []);

  return isTouch;
}
