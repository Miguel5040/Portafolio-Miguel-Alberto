
const StarWarsBlog = () => (

    <article className="flex flex-col md:flex-row lg:justify-center justify-between items-center gap-10">
        <div className="w-full md:w-1/2 flex items-center md:max-w-[500px]">
            <img className="w-[100%]" src="https://via.placeholder.com/640x360" alt="imagen de proyecto" />
        </div>
        <div className="flex flex-col md:items-start items-center gap-4 w-full md:w-1/2">
            <h3 className="text-2xl">StarWars Blog</h3>
            <div className="flex flex-col gap-4 md:items-start items-center">
                <ul className="flex gap-6 items-center">
                    <li className="flex gap-2 items-center rounded-md p-1 border-b-2 border-t-2">
                        <span className="flex items-center"><img className="w-[25px]" src="./react.svg" alt="Logo react" /></span>
                        React.js
                    </li>
                    <li className="flex gap-2 items-center rounded-md p-1 border-b-2 border-t-2">
                        <span className="flex items-center"><img className="w-[25px]" src="./tailwindcss.svg" alt="Logo tailwind css" /></span>
                        Tailwind CSS
                    </li>
                </ul>
                <div className="text-lg text-pretty text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet doloribus, quae ex id culpa fugit nulla nesciunt sint repudiandae
                </div>
                <footer className="flex gap-4">
                    <a href="/" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <img className="w-[25px]" src="./computer.svg" alt="Icono Github" />
                        Vista Previa
                    </a>
                    <a href="/" className="gap-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <img className="w-[25px]" src="./github.svg" alt="Icono Computadora" />
                        Repositorio
                    </a>
                </footer>
            </div>
        </div>
    </article>

)

export default StarWarsBlog
