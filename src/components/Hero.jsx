import { motion } from "framer-motion"
import Section from "../sub-components/Section"
import { fadeAnimation, fadeRightAnimation, fadeLeftAnimation } from "../sub-components/Animations"
import { Linkedin, Github, Mail, Download } from "../sub-components/Icons"

const IMAGEN_MUJER = "../src/assets/images/imagen-mujer.JPg"

const MAIL = 'miguel-ordonez@outlook.com'


const Hero = () => {
    return (
        <main id="inicio">
            <Section className={"flex md:flex-row flex-col md:gap-4 gap-14 justify-around items-center md:h-[650px] py-20 pt-32 md:py-4"}>

                <motion.div variants={fadeRightAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col gap-4 text-nowrap">
                    <h5 className="md:text-2xl text-xl font-medium">Hola mi nombre es</h5>
                    <h1 className="md:text-6xl text-5xl font-medium">Miguel Alberto</h1>
                    <p className="md:text-xl text-xl">Desarrollador web <strong className="text-[#3aa9ab]">Full Stack</strong></p>
                    <motion.a variants={fadeAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
                        href="../src/assets/Miguel-CV.pdf" className="gap-2 w-fit inline-flex items-center px-4 py-2 text-sm font-medium p-2 rounded-lg bg-white text-gray-900 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                        Descargar CV
                        <Download />
                    </motion.a>
                </motion.div>

                <motion.div variants={fadeLeftAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col gap-6">
                    <img className="w-[220px] rounded-full object-cover aspect-square shadow-[0_1px_60px_-25px_rgba(0,0,0,0.3)] shadow-[#494949]" src={IMAGEN_MUJER} alt="fotografía de Miguel Alberto" />
                    <motion.div variants={fadeAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }} className="flex justify-around">

                        <a href="https://www.linkedin.com/in/miguel-alberto-ordonez/" className="gap-2 w-fit inline-flex items-center p-2 text-sm font-medium rounded-lg bg-white text-gray-700 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="https://github.com/Miguel5040" className="gap-2 w-fit inline-flex items-center p-2 text-sm font-medium rounded-lg bg-white text-gray-700 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                            <Github />
                        </a>
                        <a href={`mailto:${MAIL}`} className="gap-2 w-fit inline-flex items-center p-2 text-sm font-medium rounded-lg bg-white text-gray-700 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                            <Mail />
                        </a>

                    </motion.div>
                </motion.div>

            </Section>
        </main>
    )
}

export default Hero
