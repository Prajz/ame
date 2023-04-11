import { Environment,Sphere } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { LayerMaterial,Gradient } from "lamina"
import { BackSide } from "three";


const Background = () => {

  return (
    <>
{    /*<Canvas>
      <ambientLight />
    <mesh>
    <planeBufferGeometry attach={geometry} args={[25,15]} />
    <meshPhongMaterial attach={material} color={"blue"} />
    </mesh>
  </Canvas>*/}
    <Environment preset="city" />
    <Sphere scale={[500,60,600]} rotation-y={Math.PI / 2}>
       <LayerMaterial
       lighting="physical"
       transmission={1}
       side={BackSide}
       >
           <Gradient 
           colorB={"#DB1F48"} 
           colorA={"#01949A"} 
           axes={"y"} 
           start={0} 
           end={-0.5}>
           </Gradient>
       </LayerMaterial>
       </Sphere>
    </>
    
  )
}

export default Background