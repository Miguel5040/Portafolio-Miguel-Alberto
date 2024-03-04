import PetPlus from "../sub-components/PetPlus"
import StarWarsBlog from "../sub-components/StarWarsBlog"

const Projects = () => {

    return (
        <section id="proyectos" className="py-20">
            <div className="container mx-auto max-w-[1200px] w-[90%]">
                <div className="flex flex-col justify-center items-center mb-24">
                    <h1 className="text-center mb-2">Proyectos</h1>
                    <div className="flex flex-col items-center">
                        <div className="bg-[#bcbcbc] w-[50px] h-[2px] mb-2"></div>
                        <div className="bg-[#bcbcbc] w-[100px] h-[2px]"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-16">
                    <PetPlus />
                    <StarWarsBlog />
                </div>
            </div>
        </section>
    )
}

export default Projects
