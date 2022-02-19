export default {
     
     // Home Page Variant
     homeVariant: {

        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    },
    // About Page Variant
    aboutVariant: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },
            exit: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 5
            }
        }
    },

    // Projects Page Variant
    projectVariant: {

        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        }
    },

    childVariant: {
        initial: {
            opacity: 0,
            y: '50%'
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    }
}