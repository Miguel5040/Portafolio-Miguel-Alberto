import Section from "../sub-components/Section"

const Footer = () => {
    
    return (
        <footer className="py-8">
            <Section className={"flex gap-3 justify-center"}>
                Hecho por<strong className="cursor-default hover:underline">Miguel Alberto</strong> <img src="./code.svg" alt="Icono Programación" />
            </Section>
        </footer>
    )
}

export default Footer
