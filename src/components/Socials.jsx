import React from 'react';
import {ReactComponent as Github} from '../assets/socials/github.svg'
import {ReactComponent as Twitter} from '../assets/socials/twitter.svg'
import {ReactComponent as LinkedIn} from '../assets/socials/linkedin.svg'

// Framer Motion
import { motion } from 'framer-motion'

/**
 * Container of my social media accounts. */
function Socials({ className }) {

    const socials = [
        {logo: <Github title="github"/>, label: 'Github Account', link: 'https://github.com/NADS-PROGRAMMER'},
        {logo: <Twitter />, label: 'Twitter Account', link: 'https://twitter.com/NadsMarcelo'},
        {logo: <LinkedIn />, label: 'LinkedIn Account', link: 'https://www.linkedin.com/in/adrian-marcelo-aaa19b228/'}
    ]

    return (
        <ul  className={className}>
              {
                  socials.map((social, index) => {
                      return (
                          <motion.li key={index} className="social w-[1.5rem]">
                              <a aria-label={social.label} href={social.link} target="_blank">
                                  {social.logo}
                              </a>
                          </motion.li>
                          
                      )
                  })
              }
          </ul>
    );
}

export default Socials;
