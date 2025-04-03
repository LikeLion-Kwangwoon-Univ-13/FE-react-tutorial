import { students } from "./PartB.template";
import { useSessionTitle } from "../../useSession";
import Description from "../../../../design/Description";
import { cn } from "../../../../util";

export default function PartD() {
  useSessionTitle({
    title: "함수형 프로그래밍",
    subtitle: "Array Method로 배열을 조작해봅시다.",
  });

  return (
    <div className="flex flex-col gap-y-3.5">
      <Description
        title="Q: map, filter, sort문 실습"
        description="1. 호출된 students 배열, StudentCard로 학생리스트 불러오기, 2. 배열 메서드를 이용하여 박민형 제거, 3. 학번 순 정렬"
        isAssignment={true}
      />
      <div className="flex flex-col w-1/3 gap-y-3.5">
        {
          // 여기에 코드 작성
        }
      </div>
    </div>
  );
}

function StudentCard({ name, id }) {
  const container = {
    displays: "flex flex-col",
    boundaries: "border-2 rounded-md",
    paddings: "p-3.5",
  };
  return (
    <div className={cn(container)}>
      <div>학번: {id}</div>
      <div>이름: {name}</div>
    </div>
  );
}
