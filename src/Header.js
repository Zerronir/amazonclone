import React from 'react';
import './styles/header.css'
import logo from './img/unnamed.png';

class Header extends React.Component {
    render() {
        return(
            <header className={"header"}>
                <div className={"header--top"}>
                    <div className="logo--header">
                        <a href="/"><img src={logo} className="logo" alt=""/></a>
                        <a href="/actions1">Enviar a</a>
                    </div>



                    <form action="" className="header--form">
                        <input type="text" name="buscar" />
                    </form>

                    <nav className={"header--nav"}>
                        <ul>
                            <li><a href="/perfil">Mi perfil</a></li>
                            <li><a href="/envios">Envios y pedidos</a></li>
                            <li><a href="/carrito">Cesta (0)</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={"header--bottom"}>
                    <ul>
                        <li><a href="/hamburguer" className={"header--bottom__link"}>TODO</a></li>
                    </ul>

                    <ul>
                        <li><a href="/submenu">Ofertas de navidad</a></li>
                        <li><a href="/submenu">Cheques regalo</a></li>
                        <li><a href="/submenu">AmazonBasics</a></li>
                        <li><a href="/submenu">Ideas para regalos</a></li>
                        <li><a href="/submenu">Prime</a></li>
                        <li><a href="/submenu">Amazon.es de XX</a></li>
                        <li><a href="/submenu">Los Más Vendidos</a></li>
                        <li><a href="/submenu">Atención al cliente</a></li>
                        <li><a href="/submenu">Volver a comprar</a></li>
                        <li><a href="/submenu">Últimas novedades</a></li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/submenu" className={"header--bottom__link"}>Audible</a>
                        </li>
                    </ul>

                </div>

            </header>
        )
    }
}

export default Header;
