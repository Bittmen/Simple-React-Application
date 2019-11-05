import React from 'react';
import Foto from '../assets/images/yo.jpg'

const profile = () => {
 return <div class="container">
            <div class="row">
                <div class="col-3 border">
                    <div id="foto" class="text-center mt-3">
                        <img class="img-thumbnail" src={Foto} alt="Me"></img>
                    </div>
                    <div class="form-group">
                        <label>Cambiar foto</label>
                        <input type="file" class="form-control" />
                    </div>
                </div>
                <div class="col-9">
                    <form>
                        <h3 class="text-center">Profile</h3>
                        <div class="form-group">
                            <label for="intro">Introduction</label>
                            <textarea class="form-control" name="intro" id="intro" cols="5" rows="6">
                                 Hi, i am Rodolfo, a javascript developer, based in Queretaro city 💻
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label for="about">About me</label>
                            <textarea class="form-control" name="about" id="about" cols="5" rows="6">
                                I enjoy creating applications using the MEAN stack because it is the one
                                i like the most, however i also like using other stacks such as MERN.
                            </textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-sm btn-secondary">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
};

export default profile;