import React, { Component } from 'react';
import MyOwnComponent from './Components/CustomComponet_js';
import './App.css';
import FormFields from './Components/FormFields';
import Todos from './Components/Todos';

import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {

  constructor()
  {
    super();
    this.state ={
    projects : [],
    todos : []
    }
  }

  getToDos()
  {
$.ajax({
  url : 'https://jsonplaceholder.typicode.com/todos',
  dataType : 'json',
  cache: false,
  success : function(data){
this.setState({todos : data}, function(){
  console.log(JSON.stringify(this.state))
})
  }.bind(this),
  error : function(xhr,state,err)
  {
    console.log(err)
  }

})

  }
  

  getProjects()
  {

    this.setState({
      projects : [{
        id : uuid.v4(),
        title : 'Business website',
        category : 'Web design'
      },
      {
        id : uuid.v4(),
       title : 'Social app',
       category : 'Mobile application'
      },
      {
        id : uuid.v4(),
       title : 'Ecommerce  social site',
       category : 'Web design'
      }]
      
          })

  }


  componentWillMount()
  {

    this.getProjects();
    this.getToDos();
  }


  componentDidMount()
  {
    this.getToDos();
  }

  handleAddProject(project)
  {
    console.log("the project in main ui is "+ JSON.stringify(project))
    let  projects= this.state.projects;
    projects.push(project);
    this.setState({projects : projects})
  }
  handleDleteProject(id)
  {
    let  projects= this.state.projects;
    let index =projects.findIndex(x => x.id === id)
    projects.splice(index,1);
    this.setState({projects : projects})
  }
  render() {
    return (
      <div className="App">
         {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  */}


        <MyOwnComponent dispTest="display from the param" projects={this.state.projects} onDelete={this.handleDleteProject.bind(this)} />

        <FormFields  addProject={this.handleAddProject.bind(this)} />
      <Todos  todos={this.state.todos} />
      
      </div>
      
    );
  }
}

export default App;
