import { useState } from "react";
import Index from "../../components/(root)/Index.jsx";

/**
 * 함수형 컴포넌트는 JSX Element 또는 ReactNode를 리턴합니다.
 * @returns {ReactNode}
 * OR
 * @returns {JSX}
 */
export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen min-h-screen flex  justify-center items-center">
      <div className="flex flex-col items-center w-full gap-y-36">
        <div className="flex items-center gap-x-12 ">
          <img src="/images/kw-logo.png" className="w-48 h-48 " />
          <div>
            <div className="text-3xl font-bold">광운대학교</div>
            <div>멋쟁이 사자처럼 (FE)</div>
          </div>
        </div>
        <Index />
      </div>
    </div>
  );
}
