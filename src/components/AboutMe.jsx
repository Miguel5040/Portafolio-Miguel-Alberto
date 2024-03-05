import Education from "./Education"

const AboutMe = () => {

    return (
        <section id="sobreMi" className="flex flex-col justify-center items-center py-20 md:py-10 md:h-[500px] gap-8">
            <div className="flex flex-col justify-center items-center mb-8">
                <h1 className="mb-2">Sobre mi</h1>
                <div className="flex flex-col items-center">
                    <div className="bg-[#bcbcbc] w-[50px] h-[2px] mb-2"></div>
                    <div className="bg-[#bcbcbc] w-[100px] h-[2px]"></div>
                </div>
            </div>
            <div className="container mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col justify-between gap-8 lg:gap-16">
                <article className="flex flex-col gap-6 justify-center items-center">
                    <p className="text-lg text-pretty">¡Hola! Soy Miguel Alberto, un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. Mi enfoque se centra en la innovación y la creatividad para superar desafíos y ofrecer resultados excepcionales.</p>
                    <p className="text-lg text-pretty">Soy una persona trabajadora y dedicada, siempre buscando formas de mejorar y superar obstáculos. Si estás buscando a alguien que aporte pasión y determinación a tu equipo, ¡aquí estoy yo!</p>
                </article>
                <Education />
            </div>
        </section>
    )
}

export default AboutMe 
