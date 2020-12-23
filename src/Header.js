import React from 'react';
import './styles/header.css'

export default function Header() {
    return(
        <header className={"header"}>
            <div className={"header--top"}>
                <div>
                    <h1>Logo</h1>
                </div>

                <a href="">Enviar a</a>

                <form action="">
                    <input type="text" name="buscar" />
                </form>

                <nav className={"header--nav"}>
                    <ul>
                        <li><a href="">Mi perfil</a></li>
                        <li><a href="">Envios y pedidos</a></li>
                        <li><a href="">Cesta (0)</a></li>
                    </ul>
                </nav>
            </div>

            <div className={"header--bottom"}>
                <ul>
                    <li><a href="" className={"header--bottom__link"}>TODO</a></li>
                </ul>

                <ul>
                    <li><a href="">Ofertas de navidad</a></li>
                    <li><a href="">Cheques regalo</a></li>
                    <li><a href="">AmazonBasics</a></li>
                    <li><a href="">Ideas para regalos</a></li>
                    <li><a href="">Prime</a></li>
                    <li><a href="">Amazon.es de XX</a></li>
                    <li><a href="">Los Más Vendidos</a></li>
                    <li><a href="">Atención al cliente</a></li>
                    <li><a href="">Volver a comprar</a></li>
                    <li><a href="">Últimas novedades</a></li>
                </ul>

                <ul>
                    <li>
                        <a href="" className={"header--bottom__link"}>Audible</a>
                    </li>
                </ul>

            </div>

        </header>
    )
}
