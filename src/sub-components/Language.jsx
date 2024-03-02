
const Language = ({ nombre, archivo}) => {

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <img className="lg:w-[6rem] lg:h-[6rem] w-[4rem] h-[4rem]" src={'./slider-icons/' + archivo + '.svg'} alt={'Icono ' + nombre} />
            <p>{nombre}</p>
        </div>
    )
}

export default Language
