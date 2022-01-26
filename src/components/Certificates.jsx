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
                            <h3 className="heading-3">

                                {certificate.certificate}
                            </h3>
                            <p className="p-primary">
                                {certificate.date}
                            </p>
                            <p className="p-secondary">
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
