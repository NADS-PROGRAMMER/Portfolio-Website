import React from 'react';
import {ReactComponent as Github} from '../assets/socials/github.svg'
import {ReactComponent as Twitter} from '../assets/socials/twitter.svg'
import {ReactComponent as LinkedIn} from '../assets/socials/linkedin.svg'

// Framer Motion
import { motion } from 'framer-motion'

function Socials({ className }) {

    const socials = [
        {logo: <Github title="github"/>, label: 'Github Account'},
        {logo: <Twitter />, label: 'Twitter Account'},
        {logo: <LinkedIn />, label: 'LinkedIn Account'}
    ]

    return (
        <ul  className={className}>
              {
                  socials.map((social, index) => {
                      return (
                          <motion.li key={index} className="social w-[1.5rem]">
                              <a aria-label={social.label} href="">
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
