import React from 'react'
import Button from '@mui/material/Button';

function Project({ props }) {
  return (
      <section className="flex flex-col items-start gap-[1rem] w-full md:w-max">

        {/* Project Image */}
        <img className="w-full max-w-[30rem] shadow-md dark:shadow-slate-500 mr-auto" src={props['projectImage']} alt="" />

        {/* Project Title */}
        <h2 className="heading-2">{props['projectTitle']}</h2>

        {/* Buttons */}
        <section className="flex justify-center gap-[1rem]">

            {/* Live Site button */}
            <Button 
                color="secondary"
                variant="contained">
                Live Site
            </Button>

            {/* Source Code button */}
            <Button
                color="secondary">
                Source Code
            </Button>
        </section>
        
      </section>
  );
}

export default Project;