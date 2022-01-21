import React from 'react';
import { ReactComponent as AboutLogo } from '../assets/logos/AboutLogo.svg'
function About() {

  /** Each section must be in a seperate file */
  return (
      <main className="flex flex-col items-center p-[5rem_1rem]">
          <h1 className="heading-1">About</h1>

          <AboutLogo className="img-main p-[1rem]"/>

          {/* Brief Intro */}
          <div className="text-center flex flex-col items-center gap-[.5rem]">
              <section>
                <h2 className="font-[Poppins] font-medium text-xl">Adrian Nads L. Marcelo</h2>
                <span className="font-[Poppins]">Web Developer</span>
              </section>
              
              <p className="font-[Poppins]">
                I'm a passionate Web Developer from the Philippines. I'm currently
                in my 3rd-year taking BS Computer Science. I always love creating
                projects to showcase what I am currently learned. Another is that
                I always documenting my journey through writing blogs.
             </p>
          </div>
      </main>
  )
}

export default About;
