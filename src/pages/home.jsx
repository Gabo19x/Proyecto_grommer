import Header from "../components/generales/Header"

export default function Home() {
    return(
        <>
            <Header home={true} />

            <section>
                <h2>Bienvenidos a:</h2>
                <h1>Gabi´s pets</h1>

                <p>
                    Servicio de alta calidad en gromming (peluqueria canica)
                </p>

                <p>
                    Contacto telefonico: 3132594002
                    Ubicacion: Duitama calle 17 #8a-28
                </p>
                
            </section>

            <section>
                AGENDA AQUI
            </section>
        </>
    );
}