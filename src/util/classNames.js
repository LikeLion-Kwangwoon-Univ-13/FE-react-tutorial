export default function classNames(...props) {
  const classNames = props.reduce((acc, cur) => {
    if (typeof cur === "string") {
      return [...acc, cur];
    }
    if (typeof cur === "object") {
      const values = Object.values(cur).map((value) => {
        if (!value) return "";
        return value;
      });
      return [...acc, ...values];
    }
    return acc;
  }, []);
  return classNames.join(" ");
}
