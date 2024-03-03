import Language from "../sub-components/Language"

const Technologies = () => {

    return (
        <section id="tecnologias" className="py-20 pb-32">
            <div className="container mx-auto max-w-[1200px] w-[90%]">
                <h1 className="text-3xl pb-14 text-center">Tecnologias</h1>
                <div className="grid md:grid-cols-7 grid-cols-4 md:gap-16 gap-6">
                        <Language nombre={'React'} archivo={'react'} />
                        <Language nombre={'Python'} archivo={'python'} />
                        <Language nombre={'JavaScript'} archivo={'javascript'} />
                        <Language nombre={'HTML'} archivo={'html5'} />
                        <Language nombre={'CSS'} archivo={'css'} />
                        <Language nombre={'Tailwind CSS'} archivo={'tailwind'} />
                        <Language nombre={'Bootstrap'} archivo={'bootstrap'} />
                        <Language nombre={'VS Code'} archivo={'vscode'} />
                        <Language nombre={'Git'} archivo={'git'} />
                        <Language nombre={'Github'} archivo={'github2'} />
                        <Language nombre={'Flask'} archivo={'flask'} />
                        <Language nombre={'SQL Alchemy'} archivo={'sqlalchemy'} />
                        <Language nombre={'MySQL'} archivo={'mysql'} />
                        <Language nombre={'Jest'} archivo={'jest'} />
                </div>
            </div>
        </section>
    )
}

export default Technologies
