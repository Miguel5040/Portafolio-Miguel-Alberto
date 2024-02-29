import '../App.css'

const Navbar = () => {

    return (
        <header className='p-10'>
            <nav className="flex justify-between items-center">
                <div>
                    <h1>Miguel Alberto</h1>
                </div>
                <div>
                    <ul className="flex gap-8">
                        <li className="hover:underline cursor-pointer">Inicio</li>
                        <li className="hover:underline cursor-pointer">Acerca de</li>
                        <li className="hover:underline cursor-pointer">Proyectos</li>
                        <li className="hover:underline cursor-pointer">Contacto</li>
                    </ul>
                </div>
                <div className='flex items-center gap-6 md:hidden'>
                    <img className='cursor-pointer w-10' src={'../menu.svg'} alt="menu de navegacion" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
