import { useSessionTitle } from "../../useSession";

export default function PartF() {
  useSessionTitle({
    title: "useEffect",
    subtitle: "떼었다가 붙였다가",
  });
  return <div>E</div>;
}
