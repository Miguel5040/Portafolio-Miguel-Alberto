import PetPlus from "../sub-components/PetPlus"
import StarWarsBlog from "../sub-components/StarWarsBlog"

const Projects = () => {

    return (
        <section className="py-20 bg-[#17314f]">
            <div className="container mx-auto max-w-[1200px] w-[90%]">
                <h1 className="text-3xl pb-14 text-center">Proyectos</h1>
                <div className="flex flex-col gap-y-16">
                    <PetPlus />
                    <StarWarsBlog />
                </div>
            </div>
        </section>
    )
}

export default Projects
