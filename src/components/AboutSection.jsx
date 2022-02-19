import React from 'react';
import { motion } from 'framer-motion'

/**
 * Container of all of the sections
 * in About Page.
 * @param {*} children 
 * - data that contains about the section.
 * @param {*} sectionName
 * - name of the section.
 * @returns 
 * - the container
 */
function AboutSection({ children, sectionName}) {

  const childVariant = {
    initial: {
        opacity: 0,
        y: '50%'
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
        }
    }
  }

  return (

    <motion.div variants={childVariant} className="flex flex-col items-center gap-[1rem] lg:items-start">
        <h2 className="heading-2">
            { sectionName }
        </h2>
        {children}
    </motion.div>
  )
}

export default AboutSection;
