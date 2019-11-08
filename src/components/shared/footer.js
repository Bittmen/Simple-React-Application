import React from 'react';

const footer = () => {
    return <div className="row border-top mt-5 shadow fixed-bottom bg-white">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="col-12 col-md-12 text-center">
            <a href="https://www.github.com/RodolfoFrias" 
            target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-github">
                <span className="fa fa-github fa-md fa-3x"></span>
                <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/rodolfo-guadalupe-frías-lugo-a4810516b"
             target="_blank" rel="noopener noreferrer" className="btn btn-social-icon btn-linkedin">
                <span className="fa fa-linkedin fa-md fa-3x"></span>
                <p>Linkedin</p>
            </a>
            <div className="footer-copyright text-center"> &copy; 2019 Rodolfo Frías:
            
            </div>
        </div>
    </div>
};

export default footer;