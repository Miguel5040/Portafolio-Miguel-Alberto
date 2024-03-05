
const PetPlus = () => (

    <article className="flex flex-col md:flex-row lg:justify-center justify-between items-center gap-10">
        <div className="w-full md:w-1/2 flex items-center md:max-w-[500px] shadow-[0_1px_60px_-15px_rgba(0,0,0,0.3)] shadow-[#fff]">
            <img className="w-[100%] aspect-video" src="../src/assets/images/petplus.jpg" alt="imagen de proyecto" />
        </div>
        <div className="flex flex-col md:items-start items-center gap-4 w-full md:w-1/2">
            <h3 className="text-3xl">Pet+</h3>
            <div className="flex flex-col gap-4 md:items-start items-center">
                <ul className="flex gap-2 items-center">
                    <li className="bg-blue-100 text-blue-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[20px]" src="./react.svg" alt="Logo react" /></span>
                        React.js
                    </li>
                    <li className="bg-indigo-100 text-indigo-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                        <span className="flex items-center"><img className="w-[20px]" src="./tailwindcss.svg" alt="Logo tailwind css" /></span>
                        Tailwind CSS
                    </li>
                </ul>
                <div className="text-lg text-pretty text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet doloribus, quae ex id culpa fugit nulla nesciunt sint repudiandae
                </div>
                <footer className="flex gap-4">
                    <a href="/" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                        <img className="w-[20px]" src="./computer.svg" alt="Icono Github" />
                        Vista Previa
                    </a>
                    <a href="https://github.com/Miguel5040/Proyecto-Pet-" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                        <img className="w-[20px]" src="./github.svg" alt="Icono Computadora" />
                        Repositorio
                    </a>
                </footer>
            </div>
        </div>
    </article>

)

export default PetPlus
