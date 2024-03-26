import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GenerateAnimations, GenerateAnimationsMobile, GenerateInitMaterials, LoadTextures } from "./Utils";
import gsap, {Power2} from "gsap";
import { useFrame, useThree } from "@react-three/fiber";


export default function Bottle(props) {
    
    const scene = useThree(state => state.scene)
    const timeline = gsap.timeline({defaults: {duration:1, ease: Power2.easeInOut}})
    const scroll = useScroll()
    
    const colorMaterial = {
      cristal: "#8c8c8c",
      soda: "#000"
    }

    const {cristalMaterial, sodaMaterial, brandMaterial} = GenerateInitMaterials(colorMaterial)

  const { nodes, materials } = useGLTF("/Bottle.glb");

    useLayoutEffect( () => {
        const textures = LoadTextures(["FalloutBoy", "Classic", "Quantum", "Sunset"]);

        if (window.innerWidth <= 700){
          const animationsMobile = GenerateAnimationsMobile(scene, colorMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
          animationsMobile.map( animation => {
          timeline.to(
            animation.target, {
              ...animation.animationsProperties
            },
            animation.pointTime
          )
        })
        }else{
          const animations = GenerateAnimations(scene, colorMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
          animations.map( animation => {
          timeline.to(
            animation.target, {
              ...animation.animationsProperties
            },
            animation.pointTime
          )
        })
        }
        
    },[])

    useFrame( () => {
      timeline.seek(timeline.duration() * scroll.offset)
    })

  return (
    <group name="BottleGroup" {...props} dispose={null} position={[0, 0, 0]}>
      <mesh name="Bottle" castShadow receiveShadow geometry={nodes.Bottle.geometry} material={cristalMaterial}/>
      <mesh name="Soda" castShadow receiveShadow geometry={nodes.Soda.geometry} material={sodaMaterial}/>
      <mesh name="Brand" castShadow receiveShadow geometry={nodes.Brand.geometry} material={brandMaterial}/>
      <mesh name="Cap" castShadow receiveShadow geometry={nodes.Cap.geometry} material={brandMaterial}/>
    </group>
  );
}

useGLTF.preload("/Bottle.glb");
