import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="App-content">
            <h1>
                Kalendergenerator für Stundenpläne der HTW Dresden
            </h1>
            <p>Diese Anwendung ermöglicht es, den Kalender der HTW Dresden und den eigenständigen Kalender des Standortes Pillnitz in einer beliebigen Kalenderapp als Kalenderabonnement einzubinden. Dadurch tauchen Veränderungen am Stundenplan direkt im eigenen Kalender auf.</p>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stundenplan HTW Dresden</h5>
                            <p className="card-text">Dieser Generator ist für Studierende, welche nicht der Fakultät Landbau/Umwelt/Chemie angehören und deren Stundenplan <a href="https://www.htw-dresden.de/studium/im-studium/aktuelle-stunden-und-raumplaene" rel="noreferrer" target="_blank">hier</a> zu finden ist.</p>
                            <NavLink className="btn btn-primary" to="/campus">Zur Kalendergenerierung für HTW Stundenplan</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stundenplan HTW Dresden Pillnitz</h5>
                            <p className="card-text">Dieser Generator ist für Studierende, welche zur Fakultät Landbau/Umwelt/Chemie angehören und deren Stundenplan <a href="https://www2.htw-dresden.de/~stpill/stuplan/raiplan_pill.cgi" rel="noreferrer" target="_blank">hier</a> zu finden ist.</p>
                            <NavLink className="btn btn-primary" to="/pillnitz">Zur Kalendergenerierung für für Pillnitzer Stundenplan</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
