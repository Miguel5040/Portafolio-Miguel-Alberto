import { Arrow } from "../sub-components/Icons"

const Education = () => {

    return (
        <article>
            <ol className=" border-s-2 border-[#bcbcbc] h-full">
                <li className="ms-4 h-full flex flex-col justify-center xl:justify-between items-start">
                    <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">Sep 2023 - Feb 2024</time>
                    <h3 className="text-lg font-semibold text-[#3aa9ab]">Desarrollador Web Full Stack</h3>
                    <p className="mb-4 text-base font-normal text-gray-600 text-pretty"><strong className="font-medium">4Geeks Academy</strong>, un bootcamp fullstack de desarrollo web que ofrece una inmersión práctica y orientada a proyectos en frontend y backend. Transforma tu pasión en habilidades.</p>
                    <a href="https://certificate.4geeks.com/31d61db754308ddec0deb4eb329eab8f07dcd948" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-white text-gray-900 hover:text-[#3aa9ab] hover:bg-gray-100 border border-gray-300" target="_blank">
                        Ver Certificado
                        <Arrow />
                    </a>

                </li>
            </ol>
        </article>
    )
}

export default Education
