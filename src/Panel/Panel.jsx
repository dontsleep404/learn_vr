import React from "react";
import { Interactive } from "@react-three/xr";
import { useSkyBox } from "../Config";

const Panel = () => {
  const { setPath } = useSkyBox();
  return <>
    <Interactive onSelect={() => setPath()}>
      <mesh onClick={() => setPath()}>
        <planeGeometry args={[1, 1]} />
        <meshPhongMaterial color={"black"} />
      </mesh>
    </Interactive>
  </>
};
export default Panel;
