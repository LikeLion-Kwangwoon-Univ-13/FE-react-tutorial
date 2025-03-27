import { useSessionTitle } from "../../useSession";

/**
 * @typedef {"dog" | "cat" | "cow"} Animal
 */
export default function PartC() {
  useSessionTitle({
    title: "함수",
    subtitle: "함수의 다양한 표현을 알아봐요",
  });
  const thing = "you";
  const things = ["you", "me"];

  const toWhat = (thing) => "what";
  /**
   * 하단에서 함수를 가져와서 toWhat함수를 교체해보아요
   * 함수는 밑에 모아놓았어요.
   */
  return (
    <div>
      <img src={`/images/session3/${toWhat(thing)}.webp`} />
    </div>
  );
}

/**
 * 일반적인 선언형 함수! 강아지를 출력해요.
 * @param {*} thing
 * @returns {Animal}
 */
function toDog(thing) {
  return "dog";
}

/**
 * @description
 * 화살표 함수로 정의된 고양이를 출력하는 함수!
 * @param {*} thing
 * @returns {Animal}
 * 근데 저 export는 뭘까요?
 */
export const toCat = (thing) => {
  return "cat";
};

/**
 * @description
 * 화살표 함수로 정의된 소를 출력하는 함수! 근데 @return 이 생략되었어요!
 * @param {*} thing
 * @returns {Animal}
 */
const toCow = (thing) => "cow";

/**
 * @description
 * 배열(Array)를 출력할 수 있어요.
 * @param {*} things
 * @returns {Animal[]}
 */
const toAnimals = (things) => {
  return ["dog", "cat", "cow"];
};

/**
 * @description
 * toCat과 toCow와 마찬가지로 object나 array 반환 시 return 생략이 가능해요!
 * @example
 * const toAnimals = (things) => ["dog", "cat", "cow"];
 */
