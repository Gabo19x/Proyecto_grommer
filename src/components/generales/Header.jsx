import { useNavigate } from 'react-router-dom';

export default function Header({home}) {
    const navegar = useNavigate();

    function BotonesCuenta() {
        if(true) {
            return(
            <div className="BotonesCuenta">
                <button className='BotonMenu' onClick={() => {navegar("/admin")}}>🐶 Ver más</button>
                <button className='BotonMenu' onClick={() => {/*CERRAR SESION*/}}>❌ Cerrar sesion</button>
            </div>
            );
            
        } else {
            return (
            <div className="BotonesCuenta">
                <button className='BotonMenu'>✅ Iniciar sesion</button>
            </div>
            );
            
        }
    }

    if(home) {
        return (
            <header>
                <h2>Gabi´s Pets</h2>

                <BotonesCuenta />
            </header>
        );
    } else {
        return (
            <header>
                <button className='BotonMenu' onClick={() => {navegar("/admin/agenda")}}>💬 Agenda</button>
                <button className='BotonMenu'onClick={() => {navegar("/admin/clientes")}}>🐶 Clientes</button>
            </header>
        );
        
    }
}