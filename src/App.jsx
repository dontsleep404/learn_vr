import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import './App.css'
export default function App() {
  return (
    <>
      <VRButton />
      <Canvas className='h-screen w-screen' canvas={{ antialias: true }}>
        <XR>
          <Controllers rayMaterial={{ color: 'white' }} />
          <Hands />
          
        </XR>
      </Canvas>
    </>
  )
}