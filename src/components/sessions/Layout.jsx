import { Outlet } from "react-router-dom";
import { cn } from "../../util";
import useSessionStore from "../../store/session/store";

export default function Layout() {
  const { titles } = useSessionStore();
  const container = {
    displays: "flex flex-col gap-3.5",
    sizes: "w-full min-h-screen",
    paddings: "p-5",
    styles: "overflow-y-scroll",
  };
  const titleBox = {
    displays: "flex flex-col gap-y-1.5 ",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(titleBox)}>
        <div className="text-4xl font-bold">{titles.title}</div>
        <div className="text-2xl">{titles.subtitle}</div>
      </div>
      <div className="w-full h-[70vh] border-2 border-blue-500 p-3.5 overflow-sc">
        <Outlet />
      </div>
      <Controller />
    </div>
  );
}

function Controller() {
  const { part, setPart } = useSessionStore();
  const container = {
    positions: "fixed bottom-8 right-8",
    displays: "flex gap-x-3.5",
    fonts: "text-white ",
    styles: "pointer-default",
  };
  return (
    <div className={cn(container)}>
      <button
        onClick={() => setPart(part - 1)}
        className="w-16 h-16 rounded-full bg-blue-500"
      >
        이전
      </button>
      <button
        onClick={() => setPart(part + 1)}
        className="w-16 h-16 rounded-full bg-blue-500"
      >
        다음
      </button>
    </div>
  );
}
