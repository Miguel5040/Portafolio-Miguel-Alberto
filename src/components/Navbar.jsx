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

    return (
        <header className='py-10 flex-wrap'>
            <div className='container mx-auto max-w-[1200px] w-[90%]'>
                <nav className="flex justify-between items-center">
                    <div>
                        <h1>Miguel Alberto</h1>
                    </div>
                    <div>
                        <ul className="md:flex gap-8 hidden">
                            <li className="hover:underline cursor-pointer">Inicio</li>
                            <li className="hover:underline cursor-pointer">Sobre mi</li>
                            <li className="hover:underline cursor-pointer">Proyectos</li>
                            <li className="hover:underline cursor-pointer">Contacto</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-6 md:hidden'>
                        <img className='cursor-pointer w-10' src={'../' + menuButton + '.svg'} onClick={toggleButtonMenu} alt="menu de navegacion" />
                    </div>
                </nav>
                {menuButton === 'close' && (
                    <div className='flex flex-col items-center basis-full mt-6'>
                        <ul className="flex flex-col gap-5">
                            <li className="hover:underline cursor-pointer">Inicio</li>
                            <li className="hover:underline cursor-pointer">Sobre mi</li>
                            <li className="hover:underline cursor-pointer">Proyectos</li>
                            <li className="hover:underline cursor-pointer">Contacto</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
