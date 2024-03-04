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
                    <p className="text-lg text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus vero cupiditate id error architecto laborum culpa dicta dignissimos voluptates, recusandae maiores nemo delectus deserunt dolor ea nobis facere eum in rem, soluta adipisci illum sit! Sunt facere mollitia rerum.</p>
                    <p className="text-lg text-pretty">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero mollitia architecto ratione magni alias corrupti magnam reprehenderit sunt voluptatibus perspiciatis. Labore saepe ratione dolorem quidem provident quia amet veniam magnam.</p>
                </article>
                <Education />
            </div>
        </section>
    )
}

export default AboutMe 
