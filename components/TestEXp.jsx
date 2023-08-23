import { Environment, MeshPortalMaterial, CameraControls, RoundedBox, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import {Avatar} from './Avatar'
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef,useEffect } from "react";

export const TestExp = () => {
  const [active,setActive]=useState(null)
  const [hovered,setHovered] = useState(null)
  const cameraRef=useRef();
  const scene= useThree((state)=>state.scene);

  useEffect(()=>{
    if(active){
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      cameraRef.current.setLookAt(
        0,0,5,
        targetPosition.x,targetPosition.y,targetPosition.z,
        true
      )
    }else{
      cameraRef.current.setLookAt(
        0,0,10,
        0,0,0,
        true
      )
    }
  },[active, scene])
  return (
    <>
      <ambientLight intensity={0.5}/>
      <Environment preset="sunset" />
      <CameraControls
        ref={cameraRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
      <MonsterStage active={active} setActive={setActive} text="Danav" color="#8b0000" texture={'textures/Anime_equirectangular-jpg_A_place_like_space_52177987.jpg'} hovered={hovered} setHovered={setHovered}>
      <Avatar scale={4} position-y={-3.5} position-x={-0.90} hovered={hovered==="Danav"}/>
      </MonsterStage>
    </>
  );
};

const MonsterStage=({children,texture,active, hovered,setHovered,setActive,text,color,...props})=>{
  const map = useTexture(texture)
  const portalRef=useRef();

//   useFrame((_state,delta)=>{
//     const world= active === text;
//     easing.damp(portalRef.current,'blend',world?1:0,0.2,delta)
//   })
 
  return(
    <group {...props}>
{/*       
      <RoundedBox name={text} args={[2,2.5,0.1]} onDoubleClick={()=> setActive(active===text ? null:text)}
      onPointerEnter={()=>setHovered(text)}
      onPointerLeave={()=>setHovered(null)}
      >
      <MeshPortalMaterial ref={portalRef} side={THREE.DoubleSide} >
     
      </MeshPortalMaterial>
      </RoundedBox> */}
       <ambientLight intensity={1}/>
    <Environment preset="sunset" />
         {children}
      <mesh>
         <sphereGeometry args={[5,64,64]}/>     
        <meshStandardMaterial map={map} side={THREE.BackSide}/>
      </mesh>
       
    </group>
  )
}