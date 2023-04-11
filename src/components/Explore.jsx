
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { Loader, Scroll, ScrollControls } from '@react-three/drei';
import { Suspense } from 'react';



function Explore() {

  return (
    <>
    <Suspense fallback={<Loader />}>
      <Canvas>
      <color attach="background" args={["#F6CEFC"]} />
      <ScrollControls pages={10} distance={1.5} damping={0.3} infinite>
      <Experience />
        <Scroll html className='vh'>
          <h1 > Welcome </h1>
          <h3 className='sd'>  </h3>
        </Scroll>
      </ScrollControls>
      </Canvas>
    </Suspense>
    </>
  )
}

export default Explore
