import { useState } from "react";

export const Tetst = ({ defaultNumber }) => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="count">
      <p>Счётчик</p>
        <div>
        {count}
        <div className="button_count">
          <button className="button" onClick={minus}>Минус</button>
          <button className="button" onClick={plus}>Плюс</button>
        </div>
      </div>
    </div>
  );
};
