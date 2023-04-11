import '../index.css'
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { Loader, Scroll, ScrollControls } from '@react-three/drei';
import { Suspense } from 'react';



function Explore() {

  return (
    <>
    <Suspense fallback={<Loader />} >
      <Canvas >
      <color attach="background" args={["#F6CEFC"]}/>
      <ScrollControls pages={10} distance={1.5} damping={0.3} infinite className='bong'>
      <Experience />
      </ScrollControls>
      </Canvas>
    </Suspense>
    </>
  )
}

export default Explore
