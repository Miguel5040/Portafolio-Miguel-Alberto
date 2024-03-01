
const Hero = () => {
    return (
        <main className="flex md:flex-row flex-col md:gap-4 gap-14 justify-around items-center md:h-[600px] py-10 md:py-4 bg-[#f5f5f5]">
            <div className="flex flex-col gap-4">
                <h5 className="text-xl">Hola mi nombre es:</h5>
                <h1 className="text-5xl">Miguel Alberto</h1>
                <p className="text-lg">Desarrollador web Full Stack</p>
            </div>
            <div>
                <img className="w-[220px] rounded-full" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="fotografia de Miguel Alberto" />
            </div>
        </main>
    )
}

export default Hero