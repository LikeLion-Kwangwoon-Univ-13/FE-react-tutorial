import { useRef } from "react";
import { useSessionTitle } from "../../useSession";

export default function PartG() {
  useSessionTitle({
    title: "useRef",
    subtitle: "두가지의 용도로 사용! 변수 유지, HTML 접근",
  });
  const ref = useRef(null);
  return (
    <div>
      <div ref={ref} />
    </div>
  );
}
