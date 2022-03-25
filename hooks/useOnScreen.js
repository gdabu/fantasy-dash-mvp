import { useState, useEffect } from "react";

export default function useOnScreen(ref, rootMargin) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        // triggers once the distance between the viewport and targetted
        // element is equal to the height of users viewport
        // if for whatever reason window is not defined the distance is
        // set to 500px
        rootMargin:
          rootMargin || `0px 0px ${window?.innerHeight || "500"}px 0px`,
      }
    );
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
