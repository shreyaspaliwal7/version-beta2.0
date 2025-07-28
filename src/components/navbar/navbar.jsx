import React from 'react'
import "./Navbar.css"
import logo from "../../assets/newlogo.png"
import {motion} from "framer-motion"
const imgvariants={
  initial:{
    y:-20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
const ulvariants={
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      delaychildren:0.5,
      staggerChildren:0.2
    } 
  }
}
const livariants={
  initial:{
    y:-20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
const Navbar = () => {
  return (
    <div className='navcontainer'>
      <div className="navcontent">
        <div>
          <motion.img src={logo} variants={imgvariants} initial="initial" animate="animate" className='istelogo' alt="" />
        </div>
        <motion.div className='nav'>
              <motion.ul variants={ulvariants} initial="initial" animate="animate" >
                  <motion.li variants={livariants}>HOME</motion.li>
                  <motion.li variants={livariants}>ABOUT</motion.li>
                  <motion.li variants={livariants}>SCHEDULE</motion.li>
                  <motion.li variants={livariants}>PRIZES</motion.li>
                  <motion.li variants={livariants}>GALLERY</motion.li>
                  <motion.li variants={livariants}>SPONSORS</motion.li>
                  <motion.li variants={livariants}>FAQS</motion.li>
              </motion.ul>
        </motion.div>
        <div>
          <img src="./Images/menu.svg" className='menu' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar