import React, { Component } from 'react';
import ProjectItem from './ProjectItem';



class MyOwnComponent extends Component {
    deleteProject(id)
    {
this.props.onDelete(id);
    }
  
    render() {

    let projectItems;

    if(this.props.projects)
    {
        projectItems = this.props.projects.map(
            project =>{
                //console.log(project);
                return (
                  <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            }
        )
    }
    return (
      <div className="MyOwnComponent">
        
        <div>
       This is custom Component
        </div>
        <h2>{this.props.dispTest}</h2>
        {projectItems}

        

      </div>
      
    );
  }
}

export default MyOwnComponent;
