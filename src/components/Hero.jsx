
const Hero = () => {
    return (
        <main id="inicio">
            <div className="container mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col md:gap-4 gap-14 justify-around items-center md:h-[650px] py-20 pt-32 md:py-4">
                <div className="flex flex-col gap-4 text-nowrap">
                    <h5 className="md:text-2xl text-xl">Hola mi nombre es</h5>
                    <h1 className="md:text-6xl text-5xl font-medium">Miguel Alberto</h1>
                    <p className="md:text-xl text-xl">Desarrollador web Full Stack</p>
                    <a href="../src/assets/Miguel-CV.pdf" className="gap-2 w-fit inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                        Descargar CV
                        <img className="w-[20px]" src="./download.svg" alt="Icono Curriculum Vitae" />
                    </a>
                </div>
                <div>
                    <img className="w-[220px] rounded-full aspect-square" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="fotografia de Miguel Alberto" />
                </div>
            </div>
        </main>
    )
}

export default Hero