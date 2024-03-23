import React from 'react'
import Bottle from './Bottle'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'

const Scene = () => {
  return (
    <>
    <div className="container-3d canvas">
        <Canvas camera={{fov:35, position:[0,2,10]}}>
            <ambientLight intensity={0.8} color={0xffffff}/>
            <ScrollControls pages={4} damping={0.5}>
                <Bottle />
            </ScrollControls>
            
            <OrbitControls target={[0,2,0]} enableZoom={false} enableRotate={false}/>
            <Environment files={"./snowy_park_01_1k.hdr"} blur={0.5}/>
        </Canvas>
        <div class="scroll-icon ex-1">
	        <span class="wheel"></span>
    </div>
    </div>
    
    </>
  )
}

export default Scene