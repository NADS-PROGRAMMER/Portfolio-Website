import React from 'react';
import { ReactComponent as AboutLogo } from '../assets/logos/AboutLogo.svg'
import Skills from '../components/Skills'

function About() {

  /** Each section must be in a seperate file */
  return (
      <main className="flex flex-col items-center p-[5rem_1rem] gap-[1rem] lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:max-w-[70rem] lg:mx-auto lg:gap-[5rem]">
          <h1 className="heading-1 lg:hidden">About</h1>

          <AboutLogo className="img-main p-[1rem] lg:max-w-[26rem]"/>

          <div className="flex flex-col items-center gap-[2rem] lg:items-start">
              
                <h1 className="hidden heading-1 lg:block text-left">About</h1>
                {/* Brief Intro */}
                <div className="text-center flex flex-col items-center gap-[.5rem] lg:items-start lg:text-left">
                    <section>
                        <h2 className="font-[Poppins] font-medium text-3xl">Adrian Nads L. Marcelo</h2>
                        <span className="font-[Poppins] text-xl font-normal">Web Developer</span>
                    </section>
                    
                    <p className="font-[Poppins] md:max-w-[55ch]">
                        I'm a passionate Web Developer from the Philippines. I'm currently
                        in my 3rd-year taking BS Computer Science. I always love creating
                        projects to showcase what I am currently learned. Another is that
                        I always documenting my journey through writing blogs.
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-col items-center gap-[1rem] lg:items-start">
                    <h2 className="text-3xl">Skills</h2>
                    <Skills />
                </div>
          </div>
         
      </main>
  )
}

export default About;
