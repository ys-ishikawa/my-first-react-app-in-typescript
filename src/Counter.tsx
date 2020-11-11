import React, { useState, useRef, useEffect } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus();
    ref.current.focus();
  };

  return (
    <div>
      <p>value: {value}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <p>This Components was re-rendered {renderTimes.current} times!!</p>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click me!!</button>
    </div>
  );
};

export default Counter;
