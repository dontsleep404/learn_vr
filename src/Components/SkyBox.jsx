import { useThree } from "@react-three/fiber";
import { useSkyBox } from "../Config";
import { SKYBOXS } from "../Texture";
export default function SkyBox() {
  const { path } = useSkyBox();
  const { scene } = useThree();
  scene.background = SKYBOXS[path];
  return <mesh></mesh>;
}
