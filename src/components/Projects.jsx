import PetPlus from "../sub-components/PetPlus"
import StarWarsBlog from "../sub-components/StarWarsBlog"
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
            <div className="container mx-auto max-w-[1200px] w-[90%]">
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
                <div className="flex flex-col gap-y-16">
                    <PetPlus />
                    <StarWarsBlog />
                </div>
            </div>
        </section>
    )
}

export default Projects
