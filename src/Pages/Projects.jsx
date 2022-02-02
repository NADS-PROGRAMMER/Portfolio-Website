import React from 'react';
import Project from '../components/Project'

// Projects
import Flashcards from '.././projects-photos/flashcards.png'
import RecipeApp from '.././projects-photos/recipe-search-app.png'
import TipCalculator from '.././projects-photos/tip-calculator.png'
import BaseApparel from '.././projects-photos/base-apparel-page.png'

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
      <main className="min-h-screen p-[5rem_1rem] flex flex-col items-center gap-[1.5rem]">

          {/* Title */}
          <h1 className="heading-1">Projects</h1>

          {/* Projects Container */}
          <div className="flex flex-col items-center gap-[3rem] md:flex-row md:flex-wrap md:justify-center">
            {
                projects.map((project, index) => {
                    return (
                        <Project key={index} props={project}/>
                    )
                })
            }
          </div>
      </main>
  )
}

export default Projects;
