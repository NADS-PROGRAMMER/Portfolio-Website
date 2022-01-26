import React from 'react';

function Education() {

  const educationsInfo = [
      {
          course: 'Bachelor of Science in Computer Science',
          school: 'Pamantasan Ng Cabuyao',
          year: `2019 - ${new Date().getFullYear() === 2023 ? '2023' : 'Present'}`
      },
      {
          course: 'Science, Technology, Engineering and Mathematics',
          school: 'Saint Jerome Integrated School of Cabuyao',
          year: '2018 - 2019'
      }
  ]

  return (
    
    <>
        {
            educationsInfo.map((education, index) => {
                return (
                    <section key={index} className="text-center flex flex-col items-center lg:text-left lg:items-start">
                        <h3 className="heading-3">{education.course}</h3>
                        <p className="p-primary">{education.school}</p>
                        <p className="p-secondary">{education.year}</p>
                    </section>
                )
            })        
        }
    </>
  )
}

export default Education;
