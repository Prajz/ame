import React from 'react'

import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navi = useNavigate();

  return (
    <>
    <div className="wholea">
      <h1 className='centname'> Hi, I'm Dev Prajapati </h1>
      <button onClick={() => {
        navi("/index.html");
      }} > Take a ride </button>
    </div>
    <div> Contact me on Linkedin </div>
    </>
  )
}

export default Home