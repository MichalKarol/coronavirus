import { useRef, useEffect } from "react";

export function useTimer(callback: () => void, delay: number) {
  // Please test it before using it for something more serious/sensitive

  const id = useRef<number | null>(null);

  useEffect(() => {
    id.current = window.setInterval(() => callback(), delay);

    return () => {
      if (id.current) {
        window.clearInterval(id.current);
      }
    };
  }, [callback, delay]);
}
