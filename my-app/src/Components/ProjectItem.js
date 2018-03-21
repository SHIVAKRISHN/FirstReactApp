import React, { Component } from 'react';


class ProjectItem extends Component {

    deleteProject(id)
    {
        console.log("the id is"+ id);
        this.props.onDelete(id);
        //e.preventDefault();
    }

  render() {
    return (
      <li className="ProjectItem">
       <strong>{this.props.project.title} </strong> -:  <i> {this.props.project.category} </i><a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
       
      </li>
      
    );
  }
}

export default ProjectItem;
