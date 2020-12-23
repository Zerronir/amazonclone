import React from 'react';
import './styles/maincontainer.css'
import userPicture from './img/profile.png';
import scroll1 from './img/scroll1.jpg';
import scroll2 from './img/scroll2.jpg';
import scroll3 from './img/scroll3.jpg';
import scroll4 from './img/scroll4.jpg';
import scroll5 from './img/scroll5.jpg';
import scroll6 from './img/scroll6.jpg';
import scroll7 from './img/scroll7.jpg';
import scroll8 from './img/scroll8.jpg';
import scroll9 from './img/scroll9.jpg';
import scroll10 from './img/scroll10.jpg';
import scroll11 from './img/scroll11.jpg';
// RELATED
import related1 from './img/related/scroll1.jpg';
import related2 from './img/related/scroll2.jpg';
import related3 from './img/related/scroll3.jpg';
import related4 from './img/related/scroll4.jpg';
import related5 from './img/related/scroll5.jpg';
import related6 from './img/related/scroll6.jpg';
import related7 from './img/related/scroll7.jpg';
import related8 from './img/related/scroll8.jpg';
import related9 from './img/related/scroll9.jpg';
import related10 from './img/related/scroll10.jpg';
import related11 from './img/related/scroll11.jpg';

import caprichos from './img/caprichos.jpg';
import pedidos from './img/misPedidos.png';

class MainContainer extends React.Component {

    render() {
        const name = "Raúl";
        const clientSince = 2017;

        return(
            <div className={"mainContainer"}>
                <div className={"mainContainer--Content"}>
                    <div className="offer-container">
                        <div>
                            <h1>Ofertas de navidad</h1>
                        </div>

                        <div className="mainContainer--Content__CardContainer">
                            <div className="mainContainer--Card-1">
                                <div className="mainContainer--Card__header">
                                    <div className="mainContainer--Card__header--info">
                                        <div><img src={userPicture} alt="" className="mainContainer--Card__header--img" /></div>
                                        <div>
                                            <h2>Hola {name}</h2>
                                            <small>Cliente desde {clientSince}</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="mainContainer--Card-2__img">
                                    <img src={pedidos} alt=""/>
                                </div>

                            </div>

                            <div className="mainContainer--Card-1">
                                <div className="mainContainer--Card__header">
                                    <div className="mainContainer--Card__header--info">
                                        <h2>Sigue viendo</h2>
                                    </div>
                                </div>

                                <div className="mainContainer--Card__media">

                                </div>

                                <div className="mainContainer--Card__footer">
                                    <small>Recomendaciones</small>
                                </div>
                            </div>


                            <div className="mainContainer--Card-1">
                                <div className="mainContainer--Card__header">
                                    <div className="mainContainer--Card__header--info">
                                        <h2>Oferta Top</h2>
                                    </div>
                                </div>

                                <div className="mainContainer--Card__media">

                                </div>

                            </div>

                            <div className="mainContainer--Card-1">
                                <div className="mainContainer--Card__header">
                                    <div className="mainContainer--Card__header--info">
                                        <h2>Ofertas Amazon Outlet</h2>
                                    </div>
                                </div>

                                <div className="mainContainer--Card__media">

                                </div>

                            </div>

                            <div className="mainContainer--Card__double">

                            </div>


                            <div className="mainContainer--Card-1">
                                <div className="mainContainer--Card__header">
                                    <div className="mainContainer--Card__header--info">
                                        <h2>Descubre los top ventas de Navidad</h2>
                                    </div>
                                </div>

                                <a href="/ofertas">Del 7 al 23 de diciembre</a>
                            </div>

                            <div className="mainContainer--Card-1">
                                <div className="mainContainer--Card__header">
                                    <div className="mainContainer--Card__header--info">
                                        <h2>Oferta Top</h2>
                                    </div>
                                </div>

                                <div className="mainContainer--Card__media">

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="scroll-container">
                        <div className="scrolling-wrapper-flexbox">
                            <div className="card"><img src={scroll1} alt=""/></div>
                            <div className="card"><img src={scroll2} alt=""/></div>
                            <div className="card"><img src={scroll3} alt=""/></div>
                            <div className="card"><img src={scroll4} alt=""/></div>
                            <div className="card"><img src={scroll5} alt=""/></div>
                            <div className="card"><img src={scroll6} alt=""/></div>
                            <div className="card"><img src={scroll7} alt=""/></div>
                            <div className="card"><img src={scroll8} alt=""/></div>
                            <div className="card"><img src={scroll9} alt=""/></div>
                            <div className="card"><img src={scroll10} alt=""/></div>
                            <div className="card"><img src={scroll11} alt=""/></div>
                        </div>
                    </div>

                    <div className="scroll-container">
                        <h4>Relacionado con artículos que has visto <a href="/related">Ver más</a></h4>
                        <div className="scrolling-wrapper-flexbox">
                            <div className="card"><img src={related1} alt=""/></div>
                            <div className="card"><img src={related2} alt=""/></div>
                            <div className="card"><img src={related3} alt=""/></div>
                            <div className="card"><img src={related4} alt=""/></div>
                            <div className="card"><img src={related5} alt=""/></div>
                            <div className="card"><img src={related6} alt=""/></div>
                            <div className="card"><img src={related7} alt=""/></div>
                            <div className="card"><img src={related8} alt=""/></div>
                            <div className="card"><img src={related9} alt=""/></div>
                            <div className="card"><img src={related10} alt=""/></div>
                            <div className="card"><img src={related11} alt=""/></div>
                        </div>
                    </div>

                    <div className="mainContainer--Content__CardContainer">
                        <div className="mainContainer--Card-2">
                            <div className="mainContainer--Card__header">
                                <h2>Caprichos para el hogar</h2>
                            </div>

                            <div className="mainContainer--Card-2__img">
                                <img src={caprichos} alt=""/>
                            </div>

                            <div className="mainContainer--Card-2__footer">
                                <a href="/caprichos">Compra ya</a>
                            </div>

                        </div>
                        <div className="mainContainer--Card-2"></div>
                        <div className="mainContainer--Card-2"></div>
                        <div className="mainContainer--Card-2"></div>
                    </div>

                </div>



            </div>
        )
    }
}

export default MainContainer;
