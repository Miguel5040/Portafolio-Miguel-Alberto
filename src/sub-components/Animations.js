// Framer Motion Variables para animaciones (animaciones predefinidas)

const fadeAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.3
        }
    }
}

const fadeRightAnimation = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1,
            duration: 0.7
        }
    }
}

const fadeLeftAnimation = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1,
            duration: 0.7
        }
    }
}

const downToTop = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.1
        }
    }
}


export { fadeAnimation, fadeRightAnimation, fadeLeftAnimation, downToTop }