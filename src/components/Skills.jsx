import React from 'react';
import {ReactComponent as HTML} from '../assets/Skills/html5.svg'
import {ReactComponent as CSS} from '../assets/Skills/css3.svg'
import {ReactComponent as JavaScript} from '../assets/Skills/javascript.svg'
import {ReactComponent as MongoDB} from '../assets/Skills/mongodb.svg'
import {ReactComponent as Express} from '../assets/Skills/express.svg'
import {ReactComponent as ReactLogo} from '../assets/Skills/react.svg'
import {ReactComponent as NodeJS} from '../assets/Skills/nodedotjs.svg'
import {ReactComponent as Sass} from '../assets/Skills/sass.svg'
import {ReactComponent as Tailwind} from '../assets/Skills/tailwindcss.svg'
import {ReactComponent as AdobeXD} from '../assets/Skills/adobexd.svg'
import {ReactComponent as VSCode} from '../assets/Skills/visualstudiocode.svg'

function Skills() {

  const skills = [
    <HTML className="fill-[#E34F26]"/>,
    <CSS className="fill-[#1572B6]"/>,
    <JavaScript className="fill-[#F7DF1E]"/>,
    <MongoDB className="fill-[#47A248]"/>,
    <Express className="fill-[#000000]"/>,
    <ReactLogo className="fill-[#61DAFB]"/>,
    <NodeJS className="fill-[#339933]"/>,
    <Sass className="fill-[#CC6699]"/>,
    <Tailwind className="fill-[#06B6D4]"/>,
    <AdobeXD className="fill-[#FF61F6]"/>,
    <VSCode className="fill-[#007ACC]"/>
  ]
  return (
      <ul 
      className="grid grid-cols-2 gap-[2rem] sm:flex sm:flex-wrap sm:max-w-[30rem] sm:justify-center lg:justify-start">
          {
              skills.map((skill, index) => {
                return (
                    <li key={index} className="max-w-[2rem]">
                        {skill}
                    </li>
                )
            })
          }
          
      </ul>
  )
}

export default Skills;
