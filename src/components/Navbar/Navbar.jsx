import React from 'react'
import {Link} from 'react-router-dom'
import Artis from '../../pages/Artis/Artis'

function Navbar() {
    return (
        <>
            <nav classNameName="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to = "/artis" className="navbar-brand" >{artis.name}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </nav>

        </>
    )
}

export default Navbar