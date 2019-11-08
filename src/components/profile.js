import React from 'react';
import Foto from '../assets/images/yo.jpg'

const profile = () => {
 return <div className="container">
            <div className="row">
                <div className="col-3 border">
                    <div id="foto" className="text-center mt-3">
                        <img className="img-thumbnail" src={Foto} alt="Me"></img>
                    </div>
                    <div class="form-group">
                        <label>Cambiar foto</label>
                        <input type="file" className="form-control" />
                    </div>
                </div>
                <div className="col-9">
                    <form>
                        <h3 className="text-center">Profile</h3>
                        <div className="form-group">
                            <label for="intro">Introduction</label>
                            <textarea className="form-control" name="intro" id="intro" cols="5" rows="6">
                                 Hi, i am Rodolfo, a javascript developer, based in Queretaro city <span role="img" aria-label="true">💻</span>
                            </textarea>
                        </div>
                        <div className="form-group">
                            <label for="about">About me</label>
                            <textarea className="form-control" name="about" id="about" cols="5" rows="6">
                                I enjoy creating applications using the MEAN stack because it is the one
                                i like the most, however i also like using other stacks such as MERN.
                            </textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-sm btn-secondary">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
};

export default profile;