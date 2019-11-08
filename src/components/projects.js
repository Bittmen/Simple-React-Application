import React, {Component} from 'react';
import ModalAdd from './Modals/modalAdd';
import Project from './singleProject';

class projects extends Component {

    state = {
        projects : [],
        showModal: false
    };

    componentDidMount() {
        this.loadProjects();
    }

    showModalHandler = () => {
        console.log(this.state.projects);
        const show = this.state.showModal;
        this.setState({showModal : !show});
    }

    closeModalHandler = () => {
        const close = this.state.showModal;
        this.setState({showModal : !close});
    }

    loadProjects = () => {
        fetch('http://localhost:9000/projects')
        .then(resp => {
            if(resp.status !== 200){
                throw new Error('Failed to fetch projects');
            }
            return resp.json();
        })
        .then(projects => {
            console.log(projects);
            this.setState({
                projects: projects
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
        <div className="container">
            <h2 className="text-center mt-3 d-inline-block">My projects</h2>
            <button className="btn btn-md btn-light float-right mt-3" onClick={this.showModalHandler}>Add new project</button>
            <div className="row">
                {this.state.projects.map(project => {
                    return (
                        <Project
                            title={project.title}
                            image={project.imageUrl}
                            key={project._id}
                        />
                    )
                })}
            </div>
            <ModalAdd 
                show={this.state.showModal} 
                close={this.closeModalHandler}
            />
        </div>
        )
    }
 
};

export default projects;