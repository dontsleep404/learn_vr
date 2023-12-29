import { VRButton, XR, Controllers, Hands, Interactive } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  Environment,
  Grid,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import FollowController from "./Panel/PanelHelper/FollowController";
import Panel from "./Panel/Panel";
import SkyBox from "./Components/SkyBox";
export default function App() {
  return (
    <>
      <VRButton />
      <Canvas
        shadows
        className="h-screen w-screen"
        canvas={{ antialias: true }}
      >
        <XR>
          <ambientLight intensity={0.25} />
          <pointLight
            castShadow
            position={[0, 10, 10]}
            decay={0}
            intensity={Math.PI}
          />
          <Controllers rayMaterial={{ color: "white" }} />
          <Hands />
          {/* <Sky sunPosition={calcPosFromAngles(0.3, 99)} inclination={100000}/> */}
          
          {/* <Sphere position={[0, 1, 0]} scale={1} /> */}
          <Grid
            position={[0, -0.01, 0]}
            infiniteGrid
            fadeDistance={10}
            fadeStrength={1}
            sectionColor={"#000000"}
          />
          <SkyBox />
          <OrbitControls />
          {/* <mesh receiveShadow rotation-x={-Math.PI / 2}>
            <planeGeometry args={[1000, 1000]} />
            <meshPhongMaterial color={"#000000"} />
          </mesh> */}
          <Sparkles
            size={2}
            scale={[3, 3, 3]}
            speed={1}
            count={100}
          ></Sparkles>
          <FollowController>
            <group
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0.02, 0]}
              scale={[0.1, 0.1, 0.1]}
            >
              <Panel />
            </group>
          </FollowController>
        </XR>
      </Canvas>
      {/* </Canvas> */}
    </>
  );
}