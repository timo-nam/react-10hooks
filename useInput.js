export const useInput = (inititalValue, validator) => {
  const [value, setValue] = useState(inititalValue);

  const onChange = event => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange }
}
