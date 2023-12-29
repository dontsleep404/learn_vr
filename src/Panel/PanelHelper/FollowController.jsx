import { useController, useXR } from "@react-three/xr";
import Follow from "./Follow";
export default function FollowController({ children, side}) {
  const controller = useController(side || 'left');
  return (
    <>
      {controller ? (
        <Follow
          position={controller.controller.position}
          quaternion={controller.controller.quaternion}
        >
          {children}
        </Follow>
      ) : (
        children
      )}
    </>
  );
}
