import { useThree } from "@react-three/fiber";
import Follow from "./Follow";
export default function FollowLook({children}) {
    const { gl, camera } = useThree();
    const { position, quaternion } = gl.xr.getCamera(camera);
  return (
    <Follow position={position} quaternion={quaternion}>
      {children}
    </Follow>
  );
}
