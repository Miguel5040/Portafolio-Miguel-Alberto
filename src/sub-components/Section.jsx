
const Section = (props) => {

    return (
        <div className={`container mx-auto max-w-[1200px] w-[90%] ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Section
