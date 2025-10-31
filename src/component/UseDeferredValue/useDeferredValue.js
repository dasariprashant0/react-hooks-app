import { useState, useDeferredValue } from "react";

function DeferredValue() {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h1>useDeferredValue Hook</h1>
      <input type="text" onChange={handleChange} />
      <p>Value: {value}</p>
      <p>Deferred Value: {deferredValue}</p>
    </>
  );
}

export default DeferredValue;
