import { useState, useTransition } from "react";

function Transition() {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setValue((value) => value + 1);
    });
  };
  return (
    <>
      <h1>useTransition Hook</h1>
      <p style={{ color: isPending ? "red" : "black" }}>Value: {value}</p>
      <button onClick={handleClick} disabled={isPending}>
        Click Me
      </button>
    </>
  );
}

export default Transition;
