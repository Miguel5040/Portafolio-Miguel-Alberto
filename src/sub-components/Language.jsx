
const Language = ({ nombre, archivo}) => {

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <img className="lg:w-[6rem] lg:h-[6rem] w-[4rem] h-[4rem] transform transition-transform hover:scale-110" src={'./slider-icons/' + archivo + '.svg'} alt={'Icono ' + nombre} />
            <p className="font-semibold">{nombre}</p>
        </div>
    )
}

export default Language
