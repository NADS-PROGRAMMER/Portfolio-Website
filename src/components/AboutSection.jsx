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

  return (

    <motion.div className="flex flex-col items-center gap-[1rem] lg:items-start">
        <h2 className="heading-2">
            { sectionName }
        </h2>
        {children}
    </motion.div>
  )
}

export default AboutSection;
