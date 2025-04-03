import { useState } from "react";
import { useSessionTitle } from "../../useSession";
import { cn } from "../../../../util";
import Button from "../../../../design/Button";
import Description from "../../../../design/Description";

export default function PartE() {
  useSessionTitle({
    title: "useState",
    subtitle: "React에서 변수는 무조건 이거만 씁니다.",
  });
  const [state, setState] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Description
        title="클릭했을 때 state의 값이 1씩 올라가게 해보세요."
        isAssignment={true}
      />
      <div>결과: {state}</div>
      <Button
        title="클릭"
        onClick={() => {
          setState(state);
        }}
      />
      <Description
        title="isOpen을 활용하여 클릭해서 모달을 호출할 수 있도록 해보세요!"
        isAssignment={true}
      />
      <Button title="모달 열기" onClick={() => {}} />
      {false && <Modal state={[isOpen, setIsOpen]} />}
    </div>
  );
}

function Modal({ state }) {
  const [isOpen, setIsOpen] = state;
  const [text, setText] = useState();
  const container = {
    positions: "fixed top-0 left-0 z-0",
  };
  const wrapper = {
    positions: "relative",
    displays: "flex items-center justify-center ",
    sizes: "w-screen h-screen",
    backgrounds: "bg-black/10",
  };
  const body = {
    displays: "flex flex-col ",
    boundaries: "p-3.5 rounded-md shadow-md",
    sizes: "w-100 h-100",
    backgrounds: "bg-white",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(wrapper)}>
        <div className={cn(body)}>
          <div className="text-2xl font-bold flex justify-between">
            <div>모달</div>
            <Button title="나갈랭" onClick={() => setIsOpen(false)} />
          </div>
          <input
            className="mt-12 px-1 py-1.5 focus:outline-none border-green-500 border-2 rounded-md"
            onChange={(e) => setText(e.target.value)}
            placeholder="입력해보세요."
          />
          <div className="mt-6">입력값: {text}</div>
        </div>
      </div>
    </div>
  );
}
