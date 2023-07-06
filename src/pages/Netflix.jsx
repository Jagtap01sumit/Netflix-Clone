import React, { useState } from 'react'
import Navbar from "../components/Navbar";

import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import BackgroundImage from "../assets/backgroundImage.jpg"
import Movielogo from "../assets/Movielogo.png";


export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYoffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    }
  }

  return (
    <div>
      <Navbar iScrolled={isScrolled} />
      <div className="hero">
        <img src={BackgroundImage} alt="" className='background-image' />
        <div className="container">
          <div className="logo"><img src={Movielogo} alt="Movie logo" /></div>
        </div>
        <div className="buttons flex">
          <button className='flex j-center a-center'>
            <FaPlay />
          </button>
          <button className='flex j-center a-center'>
            <AiOutlineInfoCircle/>More Info
          </button>
        </div>

      </div>
    </div>
  )
}
