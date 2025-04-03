import { useSessionTitle } from "../../useSession";
import Description from "../../../../design/Description";

export default function PartB() {
  useSessionTitle({
    title: "JSON(JavaScript Object Notation)",
    subtitle: "JSON은 가장 보편적인 HTTP 소통 방식입니다 :D",
  });

  return (
    <div className="flex flex-col gap-3.5">
      <Description title="객체 (object)" description="" />
      <Description title="배열 (array)" />
      <Description
        title="본인 이름을 아래에 추가해보세요."
        isAssignment={true}
      />
      <div className="h-full flex justify-between">
        <div className="border-2 border-black h-full w-1/5 p-1.5">
          <div>Q: 본인 이름을 아래에 추가해보세요.</div>
          {"["}
          {students.map((student) => (
            <div className="pl-3.5">
              <div>{"{"}</div>
              <div className="pl-3.5">
                <div>id: {student.id}</div>
                <div>name: {student.name}</div>
              </div>
              <div>{"},"}</div>
            </div>
          ))}
          {"]"}
        </div>
      </div>
    </div>
  );
}

function StudentCard({ student }) {
  return (
    <div className="flex ">
      <div>{student.id}</div>
      <div>{student.name}</div>
    </div>
  );
}

/**
 * @description
 * 아래는 배열입니다.
 * 배열은
 * @typedef {string[] | number[] | boolean[] | Object[]}
 * 등으로 다양하게 표현될 수 있습니다.
 */
export const students = [
  /**
   * @description
   * 아래는 object입니다.
   * object key, value로 이루어져있으며 key는 중복될 수 없어요 :)
   * 근데 저 export는 뭘까요?
   */
  {
    id: 2019203002,
    name: "김동균",
  },
  {
    id: 2024403033,
    name: "고은빈",
  },
  {
    id: 2020202040,
    name: "박민형",
  },
];
