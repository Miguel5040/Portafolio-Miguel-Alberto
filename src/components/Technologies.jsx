import { motion } from "framer-motion"
import Language from "../sub-components/Language"
import Section from "../sub-components/Section"
import { fadeRightAnimation, downToTop } from "../sub-components/Animations" 
  
const Technologies = () => {

    return (
        <section id="tecnologías">
            <Section className={"py-20 pb-32"}>
                <motion.div
                variants={downToTop} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
                 className="flex flex-col justify-center items-center mb-16">
                    <h1 className="pb-2 text-center">Tecnologías</h1>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#bcbcbc] w-[50px] h-[2px] mb-2"></div>
                        <div className="bg-[#bcbcbc] w-[100px] h-[2px]"></div>
                    </div>
                </motion.div>
                <motion.div variants={fadeRightAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}

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
            </Section>
        </section>
    )
}

export default Technologies


