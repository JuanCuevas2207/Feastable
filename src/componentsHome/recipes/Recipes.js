import Recipe from './Recipe';
import "C:/Program Projects/Visual Studio Code/React/Feastable/node_modules/bootstrap/dist/css/bootstrap.css"
import {Component} from 'react'

class Recipes extends Component{
  render(){
    return(
      <div className={"container"}>
        <div className={'row justify-content-center m-6'}>
        {this.props.data.map(recipeData => <Recipe key = {recipeData.id}  {...recipeData} />)}
        </div>
      </div>
    )
  }
}

export default Recipes;