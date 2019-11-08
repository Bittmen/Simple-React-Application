import React from 'react';

const header = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link text-white active" href="#home">Profile<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link text-white js-scroll-trigger" href="#">Projects</a>
            </div>
        </div>
    </nav>
}

export default header;