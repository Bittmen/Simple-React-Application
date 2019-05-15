import React, { Component } from 'react';
import './App.css';
import {UserOutput} from '../components/Persons';
//import Radium from 'radium';
import Modal from '../components/AddModal';

class App extends Component {

  constructor(props){
    super(props);
    this.newUser = {};
  }

  state = {
    userName : [
      {id: "1", name : "Luis"},
      {id: "2", name : "Pedro"},
      {id: "3", name : "José"},
      {id: "4", name : "Manuel"},
      {id: "5", name : "Roberto"},
      {id: "6", name : "Rodo"}
    ],
    showUsers : false,
    showModal : false
  }

  //Lifecycles
  componentDidMount(){
    console.log('app.js -> ComponentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext){
    console.log('app.js -> shouldComponentUpdate');
   if(nextState.userName !== this.props.userName){
     return true;
   }else{
     return false;
   }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('app.js -> componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('app.js -> componentWillUnmount');
  }

  static getDerivedStateFromProps(props, state){
    console.log('app.js -> getDerivedStateFromProps');
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('app.js -> getSnapshot');
    return null;
  }
///

  changeName = (event, id) => {

    const usrIndex = this.state.userName.findIndex( us => {
      return us.id === id;
    });

    const usr = {
      ...this.state.userName[usrIndex]
    }

    usr.name = event.target.value;

    const usrs = [...this.state.userName];
    usrs[usrIndex] = usr;
    
    this.setState ({
      userName : usrs 
    });
  }

  showUsers = () => {
    const show = this.state.showUsers;
    this.setState({showUsers : !show});
  }

  deleteUser = (userIndex) => {

    if(window.confirm('Sure?')){
      const users = [...this.state.userName]
      users.splice(userIndex, 1);
      this.setState({userName : users});
    }

  }

  showModalAdd = () => {
   const show = this.state.showModal;
   this.setState({showModal : !show});
  }

  closeModalAdd = () => {
    const close = this.state.showModal;
    this.setState({showModal : !close});
  }

  handleChange = (e) => {
    this.newUser = {
      id : Math.random(),
      name : e.target.value
    }
  }

  addNewUser = () => {
    const users = [...this.state.userName];
    users.push(this.newUser);
    this.setState({userName : users});
    this.closeModalAdd();
  }

  render(){
    console.log('rendering...');
    let users = null;

    if(this.state.showUsers) {

      //Listar
      users = (
        <div className="row mt-3"> 
          {this.state.userName.map((usr, index) => {
            return <UserOutput 
                    changed={(event) => this.changeName(event, usr.id)} 
                    userName={usr.name} 
                    delete={() => this.deleteUser(index)}
                    key={usr.id}
                    />
          })}
        </div>
      ); 
    }
 
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark mb-4">
          <h1><span className="badge badge-light">React application</span></h1>
          <button className="btn btn-outline-warning my-2 -my-sm-0" onClick={this.showModalAdd}>Add new user</button>
        </nav>
        <button className="btnToggle btn btn-secondary" onClick={this.showUsers}>Users</button>
        <div className="container">
          {users}
        </div>
        <Modal show={this.state.showModal}
         close={this.closeModalAdd}
         changed={this.handleChange}
         save={this.addNewUser}
         user={this.state.name}/>
      </div>
    );
  }
}

export default App;
