import { motion } from "framer-motion"
import Language from "../sub-components/Language"

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
            duration: 0.6
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
        }
    }
}
  

const Technologies = () => {

    return (
        <section id="tecnologías" className="py-20 pb-32">
            <div className="container mx-auto max-w-[1200px] w-[90%] animated-div">
                <motion.div
                variants={downToTop}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}
                 className="flex flex-col justify-center items-center mb-16">
                    <h1 className="pb-2 text-center">Tecnologías</h1>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#bcbcbc] w-[50px] h-[2px] mb-2"></div>
                        <div className="bg-[#bcbcbc] w-[100px] h-[2px]"></div>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeRightAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.8 }}

                 className="grid md:grid-cols-7 grid-cols-4 md:gap-16 gap-6">
                    <Language nombre={'React'} archivo={'react'} />
                    <Language nombre={'Python'} archivo={'python'} />
                    <Language nombre={'JavaScript'} archivo={'javascript'} />
                    <Language nombre={'HTML'} archivo={'html5'} />
                    <Language nombre={'CSS'} archivo={'css'} />
                    <Language nombre={'Tailwind CSS'} archivo={'tailwind'} />
                    <Language nombre={'Bootstrap'} archivo={'bootstrap'} />
                    <Language nombre={'VS Code'} archivo={'vscode'} />
                    <Language nombre={'Git'} archivo={'git'} />
                    <Language nombre={'Github'} archivo={'github2'} />
                    <Language nombre={'Flask'} archivo={'flask'} />
                    <Language nombre={'SQL Alchemy'} archivo={'sqlalchemy'} />
                    <Language nombre={'MySQL'} archivo={'mysql'} />
                    <Language nombre={'Jest'} archivo={'jest'} />
                </motion.div>
            </div>
        </section>
    )
}

export default Technologies


