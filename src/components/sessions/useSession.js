import { useEffect } from "react";
import useSessionStore from "../../store/session/store";

export function useSessionTitle({ title, subtitle }) {
  const { setTitles } = useSessionStore();
  useEffect(() => {
    setTitles({
      title,
      subtitle,
    });
  }, []);
}
