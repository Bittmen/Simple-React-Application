import React, { Component } from 'react';
import './style.css'

class UserOutput extends Component {

    render(){
        return (
            <div className="col-md-4">
                <div className="card mb-3">
                   <div className="card-header">
                     <p>Username: {this.props.userName}</p>
                   </div>
                   <div className="card-body">
                     <div className="form-group">
                         <input className="form-control" type="text" onChange={this.props.changed} value={this.props.userName} />
                     </div>
                     <button className="btn btn-danger mr-2" onClick={this.props.delete} >Delete</button>
                   </div>
                </div>
            </div>
         )
    }
}

export {
    UserOutput
}