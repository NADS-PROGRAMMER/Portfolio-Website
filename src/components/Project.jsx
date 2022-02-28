import React from 'react'
import Button from '@mui/material/Button';
import { motion } from 'framer-motion'
import Variants from '../variants/Variants'

function Project({ props }) {

  return (
      <motion.section variants={Variants.childVariant} className="flex flex-col items-start gap-[1rem] w-full md:w-max ">

        {/* Project Image */}
        <section 
          className="block relative before:absolute before:hidden before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-slate-100 before:bg-opacity-30 hover:before:block transition-all group">
          <img 
          className="w-full max-w-[30rem] shadow-md dark:shadow-slate-500 mr-auto " 
          src={props['projectImage']} 
          alt="" />

          <button 
          className="bg-portfolio-secondary dark:bg-slate-900 p-[1rem] invisible group-hover:visible rounded-full text-2xl text-white transition-[visibility_300ms,opacity_300ms,transform_300ms] opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1/2">
            <a href={props.projectLink} target="_blank">View</a>
          </button>
        </section>
        

        {/* Project Title */}
        <h2 className="heading-2">{props['projectTitle']}</h2>

        {/* Buttons */}
        <section className="flex justify-center gap-[1rem]">
          
            {/* Source Code button */}
            <Button
                variant="contained"
                color="secondary">
                Source Code
            </Button>
        </section>
        
      </motion.section>
  );
}

export default Project;