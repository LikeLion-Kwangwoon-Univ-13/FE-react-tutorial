import { useEffect, useState } from "react";
import { useSessionTitle } from "../../useSession";
import Description from "../../../../design/Description";

export default function PartF() {
  const [howMuchRendered, setHowMuchRendered] = useState(0);
  const [count, setCount] = useState(0);
  useSessionTitle({
    title: "useEffect",
    subtitle: "떼었다가 붙였다가",
  });
  const watchState = () => {
    setHowMuchRendered(howMuchRendered + 1);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    watchState();
  });
  return (
    <div>
      <Description
        title="deps 제어 1"
        description="deps를 조절하여 컴포넌트가 첫번째 마운트 될 때만 Effect가 작동하게 howMuchRendered를 조절하세요"
        isAssignment={true}
      />
      <Description
        title="deps 제어 2"
        description="주어진 state를 잘 이용하여 초당 한번만 Effect가 작동하게 howMuchRendered를 조절하세요"
        isAssignment={true}
      />
      howMuchRendered: {howMuchRendered}
    </div>
  );
}
