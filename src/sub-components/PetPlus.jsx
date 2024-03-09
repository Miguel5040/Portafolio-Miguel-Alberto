import { motion } from "framer-motion"
import { fadeRightAnimation, fadeLeftAnimation } from "./Animations"

const PetPlus = () => (

    <article className="flex flex-col md:flex-row lg:justify-center justify-between items-center gap-10">

        <motion.div variants={fadeRightAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
         className="w-full md:w-1/2 flex items-center md:max-w-[500px] shadow-[0_1px_60px_-20px_rgba(0,0,0,0.3)] shadow-[#aaa]">
            <img className="w-[100%] aspect-video" src="../src/assets/images/petplus.jpg" alt="imagen de proyecto" />
        </motion.div>

        <motion.div variants={fadeLeftAnimation} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.5 }}
         className="flex flex-col md:items-start items-center gap-4 w-full md:w-1/2">
            <h3 className="text-3xl">Pet+</h3>
            <div className="flex flex-col gap-4 md:items-start items-center">
                <ul className="flex gap-2 items-center flex-wrap">
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[20px]" src="./react.svg" alt="Logo react" /></span>
                        React.js
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded bg-yellow-100 text-yellow-800 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[18px]" src="./slider-icons/python.svg" alt="Logo react" /></span>
                        Python
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded bg-gray-100 text-gray-800 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[18px]" src="./slider-icons/flask.svg" alt="Logo react" /></span>
                        Flask
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded bg-red-100 text-red-800 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[27px]" src="./slider-icons/sqlalchemy.svg" alt="Logo react" /></span>
                        SQL Alchemy
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded bg-yellow-100 text-yellow-800 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[18px]" src="./slider-icons/javascript.svg" alt="Logo react" /></span>
                        JavaScript
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[22px]" src="./slider-icons/bootstrap.svg" alt="Logo bootstrap" /></span>
                        Bootstrap
                    </li>
                </ul>
                <div className="text-lg text-pretty text-center md:text-left">
                    <p className="mb-4">
                        Es una aplicación integral diseñada para que los usuarios administren y rastree sin esfuerzo información esencial
                        sobre sus mascotas.
                    </p>
                    <p>
                        Desde nombres y pesos hasta registros médicos y citas, Pet+ ofrece una interfaz fácil de usar para una organización perfecta del cuidado de las mascotas. Proyecto FullStack con equipo de 3 programadores.
                    </p>
                </div>
                <footer className="flex gap-4">
                    <a href="https://github.com/Miguel5040/Proyecto-Pet-" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white text-gray-900 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                        Repositorio
                    </a>
                    <a href="/" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white text-gray-900 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" /><path d="M7 20h10" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>
                        Vista Previa
                    </a>
                </footer>
            </div>
        </motion.div>
    </article>

)

export default PetPlus
