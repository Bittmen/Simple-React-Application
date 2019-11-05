import React from 'react';

const header = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-dark"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link text-white active" href="#home">Profile<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link text-white js-scroll-trigger" href="#">Projects</a>
            </div>
        </div>
    </nav>
}

export default header;