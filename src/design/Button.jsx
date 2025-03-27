import { cn } from "../util";

export default function Button({ title, onClick }) {
  const container = {
    displays: "flex items-center justify-center",
    animates: "hover:scale-105 duration-500 ",
    fonts: "text-sm leading-none text-white ",
    paddings: "py-3.5 px-3.5 ",
    styles: "bg-blue-500 rounded-md",
  };
  return (
    <button className={cn(container)} onClick={onClick}>
      {title}
    </button>
  );
}
