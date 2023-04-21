import React, { memo, useCallback, useEffect, useState } from "react";

const Callback = () => {
  const ExpensiveComputationComponent = memo(({ compute, count }) => {
    return (
      <div>
        <h1>Computed: {compute(count)}</h1>
        <h4>last re-render {new Date().toLocaleTimeString()}</h4>
      </div>
    );
  });

  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Hook Example: {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [fibonacci])}
        count={count}
      />
    </div>
  );
};

export default Callback;