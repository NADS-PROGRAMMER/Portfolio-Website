import React from 'react';

function Certificates() {

    /** List of certificates */
    const certificates = [
        {
            certificate: 'Responsive Web Design',
            date: '10/2021 - Present',
            givenBy: 'freeCodeCamp'
        },
        {
            certificate: 'JavaScript Algorithms and Data Structures',
            date: '12/2021 - Present',
            givenBy: 'freeCodeCamp'
        }
    ]

    return (
        <>
            {
                certificates.map((certificate, index) => {
                    return (
                        <section 
                            key={index} 
                            className="text-center flex flex-col items-center lg:text-left lg:items-start">
                            <h3 className="text-2xl font-medium text-portfolio-secondary tracking-[.2rem]">

                                {certificate.certificate}
                            </h3>
                            <p className="text-lg font-[Poppins] font-medium text-portfolio-tertiary">
                                {certificate.date}
                            </p>
                            <p className="font-[Poppins] italic">
                                By {certificate.givenBy}
                            </p>
                        </section>
                    )
                })
            }
        </>
    )
}

export default Certificates;
