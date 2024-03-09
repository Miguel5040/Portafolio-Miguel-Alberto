import PetPlus from "../sub-components/PetPlus"
import StarWarsBlog from "../sub-components/StarWarsBlog"
import Section from "../sub-components/Section"
import { motion } from "framer-motion"

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

const Projects = () => {

    return (
        <section id="proyectos" className="py-20">
            <Section>
                <motion.div
                    variants={downToTop}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col justify-center items-center mb-24">
                    <h1 className="text-center mb-2">Proyectos</h1>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#bcbcbc] w-[50px] h-[2px] mb-2"></div>
                        <div className="bg-[#bcbcbc] w-[100px] h-[2px]"></div>
                    </div>
                </motion.div>
                <div className="flex flex-col gap-y-24">
                    <PetPlus />
                    <StarWarsBlog />
                </div>
            </Section>
        </section>
    )
}

export default Projects
