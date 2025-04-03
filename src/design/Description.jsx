import { cn } from "../util";

export default function Description({ title, description, isAssignment }) {
  const container = {
    displays: "flex flex-col",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-1.5 text-2xl font-bold">
        {isAssignment && <div>(실습)</div>}
        <div>{title}</div>
      </div>
      <div className="text-base">{description}</div>
    </div>
  );
}
