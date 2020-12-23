import React from 'react';
import './styles/maincontainer.css'
export default function MainContainer() {
    const name = "Raúl";
    const clientSince = 2017;
    return(
        <div className={"mainContainer"}>
            <div className={"mainContainer--Content"}>
                <div>
                    <h1>Ofertas de navidad</h1>
                </div>

                <div>
                    <div className="mainContainer--Card">
                        <div className="mainContainer--Card__header">
                            <div className="mainContainer--Card__header--info">
                                <div><img src="./img/profile.png" alt="" className="mainContainer--Card__header--img"/></div>
                                <div>
                                    <h1 className="mainContainer--Card__title">Hola { name }</h1>
                                    <p>Cliente desde { clientSince }</p>
                                </div>
                            </div>
                        </div>

                        <div className="mainContainer--Card__media">

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
