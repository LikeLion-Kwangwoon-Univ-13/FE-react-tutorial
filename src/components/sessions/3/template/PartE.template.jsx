import { useState } from "react";
import { useSessionTitle } from "../../useSession";

export default function PartE() {
  useSessionTitle({
    title: "useState",
    subtitle: "React에서 변수는 무조건 이거만 씁니다.",
  });
  const [state, setState] = useState(0);
  let noUse = 0;
  return (
    <div>
      결과: {state}
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
}
