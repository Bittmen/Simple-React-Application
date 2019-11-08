import React from 'react';

const project = (props) => {
    return (
        <div className="col-12 col-md-4">
            <div className="text-center mt-3">
                <img className="img-thumbnail" src={props.image} alt="project"/>
            </div>
            <div className="font-weight-bold"><p>{props.title}</p></div>
            <button type="Button" className="btn btn-sm btn-primary">Editar</button>
            <button type="button" className="btn btn-sm btn-danger ml-2">Eliminar</button>
        </div>
    )
};

export default project;