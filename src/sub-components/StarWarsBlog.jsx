import { motion } from "framer-motion"

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

const StarWarsBlog = () => (

    <article className="flex flex-col md:flex-row lg:justify-center justify-between items-center gap-10">
        <motion.div
        variants={fadeRightAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
         className="w-full md:w-1/2 flex items-center md:max-w-[500px] shadow-[0_1px_60px_-20px_rgba(0,0,0,0.3)] shadow-[#fff]">
            <img className="w-[100%] aspect-video" src="./src/assets/images/starwarsBlog.jpg" alt="imagen de proyecto" />
        </motion.div>
        <motion.div
        variants={fadeLeftAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
         className="flex flex-col md:items-start items-center gap-4 w-full md:w-1/2">
            <h3 className="text-3xl">StarWars Blog</h3>
            <div className="flex flex-col gap-4 md:items-start items-center">
                <ul className="flex gap-2 items-center flex-wrap">
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[20px]" src="./react.svg" alt="Logo react" /></span>
                        React.js
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[18px]" src="./slider-icons/html5.svg" alt="Logo react" /></span>
                        HTML
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[18px]" src="./slider-icons/css.svg" alt="Logo react" /></span>
                        CSS
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[18px]" src="./slider-icons/javascript.svg" alt="Logo react" /></span>
                        JavaScript
                    </li>
                    <li className="text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[22px]" src="./slider-icons/bootstrap.svg" alt="Logo bootstrap" /></span>
                        Bootstrap
                    </li>
                </ul>
                <div className="text-lg text-pretty text-center md:text-left">
                    <p className="mb-4">
                        Proyecto de desarrollo de una aplicación web con temática de Star Wars creada para entusiastas de la saga,
                        en donde ellos pueden explorar distintos aspectos relacionados a la misma.
                    </p>
                    <p>
                        En ella el usuario puede ver planetas, personajes y vehículos, y agregar o eliminar cualquiera de ellos a favoritos.
                    </p>
                </div>
                <footer className="flex gap-4">
                    <a href="/" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                        <img className="w-[20px]" src="./computer.svg" alt="Icono Github" />
                        Vista Previa
                    </a>
                    <a href="https://github.com/Miguel5040/Blog-starwars-Miguel5040" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                        <img className="w-[20px]" src="./github.svg" alt="Icono Computadora" />
                        Repositorio
                    </a>
                </footer>
            </div>
        </motion.div>
    </article>

)

export default StarWarsBlog
