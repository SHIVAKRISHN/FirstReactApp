import React, { Component } from 'react';
import uuid from 'uuid';


class FormFields extends Component {

    constructor(){
      super();
      this.state ={
          newProject : {}
      }

    }



    static defaultProps ={
        categories : ['webDesign','WebDevelopment','MobileDevelopment']
    }
    handleSubmit(e)
    {
       console.log("the title is "+ this.refs.title.value);
       console.log("the project  is "+ this.refs.category.value);
        e.preventDefault();
        this.setState({
            newProject :{
                id : uuid.v4(),
                title : this.refs.title.value,
                category : this.refs.category.value
            }
        },function(){
            //console.log("the added object is "+ this.state.newProject);
            this.props.addProject(this.state.newProject);
        }
        );
    }

  render() {
let CategorieOptions = this.props.categories.map(categorie => {
    return <option key={categorie} value={categorie}>{categorie}</option>
});



    return (
    <div>
<h3>Add Project</h3>

<form onSubmit={this.handleSubmit.bind(this)}>
<div>
<label>Title</label> <br />
<input type="text" ref="title" />

</div>

<div>
<label>Categorie</label> <br />
<select ref="category">

{CategorieOptions}
</select>


</div>


<input type="submit" value="Submit" />




    </form>

        </div>
      
    );
  }
}

export default FormFields;
