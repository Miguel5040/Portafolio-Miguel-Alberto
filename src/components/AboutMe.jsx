import Education from "./Education"
import Section from "../sub-components/Section"
import { motion } from "framer-motion"
import { fadeAnimation, downToTop  } from "../sub-components/Animations"

const AboutMe = () => {

    return (
        <section id="sobreMi">
            <Section className={"flex flex-col justify-center items-center py-20 md:py-10 md:h-[500px] gap-8"}>

            <motion.div variants={downToTop} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col justify-center items-center mb-8">
                <h1 className="mb-2">Sobre mi</h1>
                <div className="flex flex-col items-center">
                    <div className="bg-[#bcbcbc] w-[50px] h-[2px] mb-2"></div>
                    <div className="bg-[#bcbcbc] w-[100px] h-[2px]"></div>
                </div>
            </motion.div>

            <motion.div variants={fadeAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
            className="flex md:flex-row flex-col justify-between gap-16 lg:gap-16">
                <article className="flex flex-col gap-6 justify-center items-center">
                    <p className="text-lg text-pretty"><strong className="font-medium text-[#3aa9ab]">¡Hola!</strong> Soy <strong className="font-normal underline underline-offset-4">Miguel Alberto</strong>, un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. Mi enfoque se centra en la <strong className="font-medium text-[#3aa9ab]">innovación y la creatividad</strong> para superar desafíos y ofrecer resultados excepcionales.</p>
                    <p className="text-lg text-pretty">Soy una persona <strong className="font-medium text-[#3aa9ab]">trabajadora y dedicada</strong>, siempre buscando formas de mejorar y superar obstáculos. Si estás buscando a alguien que aporte pasión y determinación a tu equipo, <strong className="font-normal underline underline-offset-4">¡aquí estoy yo!</strong></p>
                </article>

                <Education />
                
            </motion.div>

            </Section>
        </section>
    )
}

export default AboutMe 
