
const Hero = () => {
    return (
        <main>
            <div className="container mx-auto max-w-[1200px] w-[90%] flex md:flex-row flex-col md:gap-4 gap-14 justify-around items-center md:h-[600px] py-16 md:py-4">
                <div className="flex flex-col gap-4 text-nowrap">
                    <h5 className="md:text-2xl text-xl">Hola mi nombre es:</h5>
                    <h1 className="md:text-6xl text-5xl">Miguel Alberto</h1>
                    <p className="md:text-xl text-xl">Desarrollador web Full Stack</p>
                </div>
                <div>
                    <img className="w-[220px] rounded-full" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="fotografia de Miguel Alberto" />
                </div>
            </div>
        </main>
    )
}

export default Hero