import React from 'react';
import proyecto from '../assets/images/messenger-like.png'

const projects = () => {
 return <div className="container">
            <h2 className="text-center mt-3">My projects</h2>
            <div className="row">
                <div className="col-4">
                    <div class="text-center mt-3">
                        <img class="img-thumbnail" src={proyecto} alt="project"/>
                    </div>
                    <div className="font-weight-bold"><p>Messenger-like</p></div>
                    <button type="Button" className="btn btn-sm btn-primary">Editar</button>
                </div>
                <div className="col-4">
                    <div class="text-center mt-3">
                        <img class="img-thumbnail" src={proyecto} alt="project"/>
                    </div>
                    <div className="font-weight-bold"><p>Messenger-like</p></div>
                    <button type="Button" className="btn btn-sm btn-primary">Editar</button>
                </div>
                <div className="col-4">
                    <div class="text-center mt-3">
                        <img class="img-thumbnail" src={proyecto} alt="project"/>
                    </div>
                    <div className="font-weight-bold"><p>Messenger-like</p></div>
                    <button type="Button" className="btn btn-sm btn-primary">Editar</button>
                </div>
            </div>
        </div>
};

export default projects;