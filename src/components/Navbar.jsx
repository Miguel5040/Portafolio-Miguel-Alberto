import { useState } from 'react'

const Navbar = () => {

    const [menuButton, setMenuButton] = useState('menu')

    function toggleButtonMenu() {
        if (menuButton === 'menu') {
            setMenuButton('close')
            return
        }
        setMenuButton('menu')
    }

    function scrollSection(id) {
        const section = document.getElementById(id)
        const yOffset = -20
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({ top: y, behavior: "smooth" })

        if (menuButton === 'close') {
            setMenuButton('menu')
        }
    }

    return (
        <header className='py-6 flex-wrap bg-[#fff] bg-opacity-80 backdrop-blur-sm z-[100]'>
            <div className='container mx-auto max-w-[1200px] w-[90%]'>
                <nav className="flex justify-between items-center">
                    <div>
                        <h1 className='text-2xl font-poppins cursor-default select-none'>Miguel A.</h1>
                    </div>
                    <div>
                        <ul className="md:flex gap-8 hidden">
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('inicio') }}>Inicio</li>
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('sobreMi') }}>Sobre mi</li>
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('proyectos') }}>Proyectos</li>
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('tecnologías') }}>Tecnologías</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-6 md:hidden'>
                        <img className='cursor-pointer w-10' src={'../' + menuButton + '.svg'} onClick={toggleButtonMenu} alt="menu de navegación" />
                    </div>
                </nav>
                {menuButton === 'close' && (
                    <div className='flex flex-col items-start basis-full mt-6 md:hidden'>
                        <ul className="flex flex-col gap-5">
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('inicio') }}>Inicio</li>
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('sobreMi') }}>Sobre mi</li>
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('proyectos') }}>Proyectos</li>
                            <li className="hover:underline hover:text-[#0ca34d] cursor-pointer underline-offset-8" onClick={() => { scrollSection('tecnologías') }}>Tecnologías</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
