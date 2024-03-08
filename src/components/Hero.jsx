import { motion } from "framer-motion"

const MAIL = 'miguel-ordonez@outlook.com'

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

const fadeAnimation = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.8,
            duration: 0.3
        }
    }
}

const Hero = () => {
    return (
        <main id="inicio">
            <div className="container mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col md:gap-4 gap-14 justify-around items-center md:h-[650px] py-20 pt-32 md:py-4">
                <motion.div
                variants={fadeRightAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}
                 className="flex flex-col gap-4 text-nowrap">
                    <h5 className="md:text-2xl text-xl font-medium">Hola mi nombre es</h5>
                    <h1 className="md:text-6xl text-5xl font-medium">Miguel Alberto</h1>
                    <p className="md:text-xl text-xl">Desarrollador web <strong className="text-[#fef08a]">Full Stack</strong></p>
                    <motion.a
                    variants={fadeAnimation}
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    viewport={{ once: true}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    href="../src/assets/Miguel-CV.pdf" className="gap-2 w-fit inline-flex items-center px-4 py-2 text-sm font-medium p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600" target="_blank">
                        Descargar CV
                        <img className="w-[20px]" src="./download.svg" alt="Icono Curriculum Vitae" />
                    </motion.a>
                </motion.div>
                <motion.div
                variants={fadeLeftAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                 className="flex flex-col gap-6">
                    <img className="w-[220px] rounded-full object-cover aspect-square shadow-[0_1px_60px_-25px_rgba(0,0,0,0.3)] shadow-[#fff]" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="fotografía de Miguel Alberto" />
                    <motion.div
                    variants={fadeAnimation}
                    initial={{ opacity: 0 }}
                    whileInView="animate"
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true}}
                    className="flex justify-around">
                        <a href="https://www.linkedin.com/in/miguel-alberto-ordonez/" className="gap-2 w-fit inline-flex items-center p-2 text-sm font-medium rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" target="_blank">
                            <img className="w-[30px]" src="./linkedin.svg" alt="Icono Curriculum Vitae" />
                        </a>
                        <a href="https://github.com/Miguel5040" className="gap-2 w-fit inline-flex items-center p-2 text-sm font-medium rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" target="_blank">
                            <img className="w-[30px]" src="./slider-icons/github2.svg" alt="Icono Curriculum Vitae" />
                        </a>
                        <a href={`mailto:${MAIL}`} className="gap-2 w-fit inline-flex items-center p-2 text-sm font-medium rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" target="_blank">
                            <img className="w-[30px]" src="./mail.svg" alt="Icono Curriculum Vitae" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

export default Hero
