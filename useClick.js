export const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    if (typeof onClick !== "function") {
      return;
    }

    if (element) {
      element.addEventListener("click", onClick);
    }

    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return typeof onClick !== "function" ? undefined : ref.current;
};
