import React from "react";
import PartA from "./template/PartA.template";
import PartB from "./template/PartB.template";
import PartC from "./template/PartC.template";
import PartD from "./template/PartD.template";
import PartE from "./template/PartE.template";
import PartF from "./template/PartF.template";
import useSessionStore from "../../../store/session/store";

export default function Session4() {
  const { part } = useSessionStore();
  if (part === 0) return <PartA />;
  if (part === 1) return <PartB />;
  if (part === 2) return <PartC />;
  if (part === 3) return <PartD />;
  if (part === 4) return <PartE />;
  if (part === 5) return <PartF />;
  return <PartA />;
}
