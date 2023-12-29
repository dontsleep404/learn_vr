import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function Follow({
  children,
  position,
  quaternion,
}) {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.quaternion.copy(quaternion);
    meshRef.current.position.copy(position);
    let pos = new THREE.Vector3(0, 0, 0);
    meshRef.current.position.add(pos.applyQuaternion(quaternion));
  });
  return <group ref={meshRef}>{children}</group>;
}
