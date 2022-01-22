import React from 'react';
import Button from '@mui/material/Button'
import { ReactComponent as AboutLogo } from '../assets/logos/AboutLogo.svg'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Certificates from '../components/Certificates'

import { motion } from 'framer-motion'

function About() {

  /** Each section must be in a seperate file */
  return (
      <motion.main className="main-about">

          {/* About (Text) */}
          <motion.h1 
            className="heading-1 lg:hidden">
                About
          </motion.h1>

          <motion.section>
              <AboutLogo className="img-main p-[1rem] lg:max-w-[26rem] lg:sticky lg:top-[5rem] mx-auto"/>
          </motion.section>
          
          <motion.div  className="flex flex-col">
            <motion.h1 className="hidden heading-1 lg:block text-left">About</motion.h1>

             <div className="flex flex-col items-center gap-[3rem] lg:items-start">
              
                    {/* Brief Intro */}
                    <motion.div className="text-center flex flex-col items-center gap-[.5rem] lg:items-start lg:text-left">
                        <section>
                            <h2 
                                className="font-[Poppins] font-medium text-3xl">
                                Adrian Nads L. Marcelo
                            </h2>
                            <span 
                                className="font-[Poppins] text-xl text-portfolio-tertiary font-medium">
                                Web Developer
                            </span>
                        </section>
                        
                        <p className="font-[Poppins] md:max-w-[55ch]">
                            I'm a passionate Web Developer from the Philippines. I'm currently
                            in my 3rd-year taking BS Computer Science. I always love creating
                            projects to showcase what I am currently learned. Another is that
                            I always documenting my journey through writing blogs.
                        </p>
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

                    {/* Skills */}
                    <motion.div className="flex flex-col items-center gap-[1rem] lg:items-start">
                        <h2 className="heading-2">
                            Skills
                        </h2>
                        <Skills />
                    </motion.div>

                    {/* Education */}
                    <motion.div  className="flex flex-col items-center gap-[1rem] lg:items-start">
                        <h2 className="heading-2">Education</h2>
                        <Education />
                    </motion.div>
                  
                    {/* Certificates */}
                    <motion.div className="flex flex-col items-center gap-[1rem] lg:items-start">
                        <h2 className="heading-2">Certificates</h2>
                        <Certificates />
                    </motion.div>
                </div>
          </motion.div>
         
         
      </motion.main>
  )
}

export default About;
