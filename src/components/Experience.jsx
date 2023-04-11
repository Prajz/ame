import React, { Suspense, useMemo, useRef } from 'react'
import { Line, Loader,  OrbitControls, PerspectiveCamera, useScroll} from '@react-three/drei'
import Background from './Background'
import { useFrame } from '@react-three/fiber'
import { SMC } from './SMC'
import { CatmullRomCurve3, Euler, Quaternion, Shape, Vector3 } from 'three'

import { Timjorts } from './Timjorts'


const bongo = 16000;

export const Experience = () => {

  const curve = useMemo(() => {
    return new CatmullRomCurve3([
      new Vector3(-1 ,0 ,0),
      new Vector3(5 ,0 ,0),
      new Vector3(10 ,0 ,0),
      new Vector3(15 ,0 ,0),
      new Vector3(20 ,0 ,0),
      new Vector3(24 ,0 ,1),
      new Vector3(28 ,0 ,3), 
      new Vector3(32.5 ,0 ,6), 
      new Vector3(34.8 ,0 ,7.8), 
      new Vector3(37.9 ,0 ,10.4), 
      new Vector3(38.2 ,0 ,11.4), 
      new Vector3(39.2 ,0 ,14), 
      new Vector3(42 ,0 ,18), 
      new Vector3(46 ,0 ,22), 
      new Vector3(51 ,0 ,27), 
      new Vector3(54 ,0 ,31), 
      new Vector3(61 ,0 ,41), 
      new Vector3(66 ,0 ,49), 
      new Vector3(67 ,0 ,54), 
      new Vector3(68 ,0 ,59), 
      new Vector3(69 ,0 ,66),
      new Vector3(69 ,0 ,86),
      new Vector3(59 ,0 ,86),
      new Vector3(49 ,0.1 ,86),
      new Vector3(39 ,0 ,86),
      new Vector3(29 ,0 ,82),
      new Vector3(19 ,0 ,80),
      new Vector3(19 ,0 ,40),
      new Vector3(8 ,0 ,30),
      new Vector3(7 ,0 ,25),
      new Vector3(-10 ,0 ,30),
      new Vector3(-20 ,0 ,15),
      new Vector3(-15 ,0 ,0),
      new Vector3(-0.9 ,0 ,0),
    ],
    false,
      "chordal"
    )
  }, [])

  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(2.5, -0.58);
    shape.lineTo(-2.5, -0.58);

    return shape;
  }, [curve]);

  const linePoints = useMemo(() => {
    return curve.getPoints(bongo);
  }, [curve]);

  const camg = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    
    if (scroll.offset < 0.001) {
      var curPoindex = 0
      var turningdir = 0
    }else{
    var curPoindex = Math.min(
      Math.round((scroll.offset) * linePoints.length), (linePoints.length - 1)
    );
    }
    const curPoin = linePoints[curPoindex]
    const poinAhead = linePoints[Math.min(curPoindex + 1, linePoints.length - 1)];

    const zDisplacement = (poinAhead.z - curPoin.z);

    if (zDisplacement > 0){
      
      let turningdir = Math.PI / 3.2;
      
    }
    if (zDisplacement < 0){

      let turningdir = - Math.PI / 3.2;

    }

    // Math.PI / 2 -> Left
    // - Math.PI / 2 -> Right
    const shlong = 0.4;

    const targetcarQuaternion = new Quaternion().setFromEuler(
      new Euler(
        mcar.current.rotation.z,
        turningdir,
        mcar.current.rotation.x,
        
      )
    );

    mcar.current.quaternion.slerp(targetcarQuaternion, delta * 1);
    
    camg.current.position.lerp(curPoin, delta * 15)
  })

  const mcar = useRef();

  return (
    <>
    {/*<OrbitControls enableZoom={false} />*/}
    {/*<PresentationControls />*/}
    <Timjorts />
    <group ref={camg}>
    <group ref={mcar} >
      <SMC />
    </group>
    <Background />
    <PerspectiveCamera position={[0.85, 0.79, 0]} rotation={[-0.3,-Math.PI / 2,-0.3]} fov={105} makeDefault />
    </group>
    <group position-y={-0.582} position-z={1.3}>
    <Line
    points={linePoints}
    color={"green"}
    />
    </group>
    <group position-y={-0.582} position-z={-1.3}>
    <Line
    points={linePoints}
    color={"green"}
    />
    </group>
    <mesh>
      <extrudeGeometry 
      args={[
        shape,
        {steps: bongo,
          depth: 0.01,
        bevelEnabled: false,
        extrudePath: curve}
      ]} />
      <meshLambertMaterial color={"grey"} opacity={0.8} />
    </mesh>
  </>
  )
}
