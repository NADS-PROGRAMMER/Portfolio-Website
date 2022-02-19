import React from 'react';
import Button from '@mui/material/Button'
import { ReactComponent as AboutPhoto } from '../assets/logos/AboutLogo.svg'
import AboutSection from '../components/AboutSection'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certificates from '../components/Certificates'
import { motion, AnimatePresence } from 'framer-motion'
import Variants from '../variants/Variants'

/**
 * It is the About Page. */
function About() {
  
  /** All of the sections in About page. */   
  const sections = [
      {
          section: <Skills />,
          name: 'Skills'
      },
      {
          section: <Education />,
          name: 'Education'
      },
      {
          section: <Certificates />,
          name: 'Certificates'
      },
  ]

  const childVariant = {
    initial: {
        opacity: 0,
        y: '50%'
    },
    animate: {
        opacity: 1,
        y: 0
    },

  }

  return (

    <AnimatePresence>
      <motion.main variants={Variants.aboutVariant} initial="initial" animate="animate" exit="exit" className="main-about">

          {/* About (Text) */}
          <motion.h1 
            variants={childVariant}
            className="heading-1 lg:hidden">
                About
          </motion.h1>
          
          {/* Photo */}
          <motion.section 
              variants={childVariant}
              aria-label="Photo of Adrian Nads" className="lg:sticky lg:top-[5rem]">
              <AboutPhoto className="img-main p-[1rem] lg:max-w-[26rem]  mx-auto"/>
          </motion.section>
          
          <motion.div  className="flex flex-col">
              
            <motion.h1 
                variants={childVariant}
                className="hidden heading-1 lg:block text-left">
                    About
            </motion.h1>

             <div className="flex flex-col items-center gap-[3rem] lg:items-start">
              
                    {/* Brief Intro */}
                    <motion.div variants={Variants.aboutVariant} initial="initial" animate="animate"  className="text-center flex flex-col items-center gap-[.5rem] lg:items-start lg:text-left">

                        {/* Adrian Nads Marcelo / Web Developer */}
                        <motion.section variants={Variants.aboutVariant} initial="initial" animate="animate">
                            <motion.h2
                                variants={childVariant} 
                                className="font-[Poppins] font-medium text-3xl dark:text-slate-100">
                                Adrian Nads L. Marcelo
                            </motion.h2>
                            <motion.span 
                                variants={childVariant} 
                                className="font-[Poppins] text-xl text-portfolio-tertiary font-medium dark:text-orange-100">
                                Web Developer
                            </motion.span>
                        </motion.section>
                        
                        {/* Introduction */}
                        <motion.p variants={childVariant} className="font-[Poppins] md:max-w-[55ch] dark:text-slate-100">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi esse reprehenderit enim, neque culpa fugiat deleniti officia earum provident quidem consequuntur tempore quisquam impedit animi dolorum. Illum adipisci tempora quis.
                        </motion.p>

                        {/* Resume Button */}
                        <Button
                            size="large"
                            sx={{
                                marginTop: '1rem'
                            }}
                            color="secondary"
                            variant="contained">
                            Resume
                        </Button> 
                    </motion.div>
                    
                    <motion.div 
                    variants={Variants.aboutVariant} initial="initial" animate="animate"
                    className="flex flex-col gap-[3rem]">
                        {
                        sections.map((section, index) => {
                            return (
                                <AboutSection key={index} sectionName={section.name}>
                                    {section['section']}
                                </AboutSection>
                                )
                            })
                        }
                    </motion.div>
                    {/* Loop through all of the SECTION */}
                    

                </div>
          </motion.div>
      </motion.main>
      </AnimatePresence>
  )
}

export default About;
