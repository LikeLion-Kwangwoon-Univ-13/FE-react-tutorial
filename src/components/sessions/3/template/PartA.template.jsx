import { useSessionTitle } from "../../useSession";
import { useState } from "react";

export default function PartA() {
  useSessionTitle({
    title: "JavaScript의 변수 선언",
    subtitle: "var, let, const",
  });

  const [log, setLog] = useState([]);
  const [description, setDescription] = useState();

  const runExample = (kind) => {
    let result = [];
    if (kind === "var") {
      for (var i = 0; i < 3; i++) {
        result.push(() => `var: ${i}`);
      }
      setDescription(
        `"var"은 함수 스코프라서 루프가 끝난 뒤 i의 값은 3이 됩니다.\n모든 함수가 동일한 i 값을 참조하게 됩니다.`
      );
    } else if (kind === "let") {
      for (let i = 0; i < 3; i++) {
        result.push(() => `let: ${i}`);
      }
      setDescription(
        `"let"은 블록 스코프라서 루프가 반복될 때마다 새로운 i가 생성됩니다.\n각 함수는 다른 i 값을 기억합니다.`
      );
    } else if (kind === "const") {
      const x = 1;
      result.push(() => `const: ${x}`);
      // for (const i = 0; i < 3; i++) {
      //   result.push(() => `const: ${i}`);
      // } // 주석 지우면 오류 발생
      setDescription(
        `"const"는 블록 스코프이며 재할당이 불가능합니다.\n여기서는 x가 42로 고정되어 있습니다.`
      );
    }

    // 실행 시점의 결과 보기
    const logs = result.map((fn) => fn());
    setLog(logs);
  };

  return (
    <div>
      <p>아래 버튼을 눌러 각각의 변수를 실행해 보세요:</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => runExample("var")}>var</button>
        <button onClick={() => runExample("let")}>let</button>
        <button onClick={() => runExample("const")}>const</button>
      </div>
      <div className="mt-4">
        {log.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div>{description}</div>
    </div>
  );
}
