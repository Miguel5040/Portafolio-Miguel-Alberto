import Language from "../sub-components/Language"

const Technologies = () => {

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-[1200px] w-[90%]">
                <h1 className="text-3xl pb-14 text-center">Tecnologias</h1>
                <div className="flex md:flex-col flex-row md:gap-16 justify-center">
                    <div className="flex md:flex-row flex-col w-full justify-between gap-6">
                        <Language nombre={'React'} archivo={'react'} />
                        <Language nombre={'Python'} archivo={'python'} />
                        <Language nombre={'JavaScript'} archivo={'javascript'} />
                        <Language nombre={'HTML'} archivo={'html5'} />
                        <Language nombre={'CSS'} archivo={'css'} />
                        <Language nombre={'Tailwind CSS'} archivo={'tailwind'} />
                        <Language nombre={'Bootstrap'} archivo={'bootstrap'} />
                    </div>
                    <div className="flex md:flex-row flex-col w-full justify-between gap-6">
                        <Language nombre={'VS Code'} archivo={'vscode'} />
                        <Language nombre={'Git'} archivo={'git'} />
                        <Language nombre={'Github'} archivo={'github2'} />
                        <Language nombre={'Flask'} archivo={'flask'} />
                        <Language nombre={'SQL Alchemy'} archivo={'sqlalchemy'} />
                        <Language nombre={'MySQL'} archivo={'mysql'} />
                        <Language nombre={'Jest'} archivo={'jest'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies
