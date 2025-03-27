import { useState } from "react";

export default function Session2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((v) => v + 1)}>클릭</button>
    </div>
  );
}
