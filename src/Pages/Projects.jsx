import React from 'react';
import Project from '../components/Project'

// Projects
import Flashcards from '.././projects-photos/flashcards.png'
import RecipeApp from '.././projects-photos/recipe-search-app.png'
import TipCalculator from '.././projects-photos/tip-calculator.png'
import BaseApparel from '.././projects-photos/base-apparel-page.png'

import { motion } from 'framer-motion'
import Variants from '../variants/Variants'

function Projects() {

  /** == My Projects ==
   * 
   * Each object consist of the image and project title. */
  const projects = [

    {
        projectImage: Flashcards,
        projectTitle: 'Flashcards'
    },
    {
        projectImage: RecipeApp,
        projectTitle: 'Recipe Search App'
    },
    {
        projectImage: TipCalculator,
        projectTitle: 'Tip Calculator'
    },
    {
        projectImage: BaseApparel,
        projectTitle: 'Base Apparel Page'
    },
  ]

  return (
      <motion.main variants={Variants.projectVariant} initial="initial" animate="animate" className="min-h-screen p-[5rem_1.5rem] flex flex-col items-center gap-[1.5rem]">

          {/* Title */}
          <motion.h1 variants={Variants.childVariant} className="heading-1">Projects</motion.h1>

          {/* Projects Container */}
          {/* flex flex-col items-center gap-[3rem] md:flex-row md:flex-wrap md:justify-center */}
          <motion.div variants={Variants.projectVariant} initial="initial" animate="animate" className="flex flex-col items-center gap-[3rem] md:flex-row md:flex-wrap md:justify-center 2xl:grid 2xl:grid-cols-3 2xl:gap-[3rem]">
            {
                projects.map((project, index) => {
                    return (
                        <Project key={index} props={project}/>
                    )
                })
            }
          </motion.div>
      </motion.main>
  )
}

export default Projects;
