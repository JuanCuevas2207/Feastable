import catBarStyles from './CategoryBar.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Title from "../title/Title";
import Recipes from "../recipes/Recipes";
import { Component} from 'react';


class CategoryBar extends Component {

  componentDidMount(){
    if(this.props.id!==""){
      for(let i=1; i<=7;i++){
        document.getElementById(i).style.fontWeight="400"
      }
      document.getElementById(this.props.id).style.fontWeight="700"
    }    
  }

  
  
  setActive = e=>{
    let id= e.target.id

    if(id!==""){
      for(let i=1; i<=7;i++){
        document.getElementById(i).style.fontWeight="400"
      }
      document.getElementById(id).style.fontWeight="700"
    }      
  }

  render(){
    return(
        <BrowserRouter>
          <div className={catBarStyles.categoryBar}>
            <ul>
              <li className= {catBarStyles.activeCategory} onClick={this.setActive}><Link to="/desayunos" id="1">Desayunos</Link></li>
              <li onClick={this.setActive}><Link to="/platos-fuertes" id="2">Platos Fuertes</Link></li>
              <li onClick={this.setActive}><Link to="/ensaladas" id="3">Ensaladas</Link></li>
              <li onClick={this.setActive}><Link to="/sopas" id="4">Sopas</Link></li>
              <li onClick={this.setActive}><Link to="/snacks" id="5">Snacks</Link></li>
              <li onClick={this.setActive}><Link to="/postres" id="6">Postres</Link></li>
              <li onClick={this.setActive}><Link to="/healthy" id="7">Healthy</Link></li>
            </ul>
          </div>
  
        <Route path = "/desayunos" exact render = {()=>(
          <div>
            <Title text={'D E S A Y U N O S'} image={"breakfast.jpg"}/>
            <Recipes data={this.props.breakfastRecipes}/>
          </div>
        )}>
        </Route>

        <Route path = "/platos-fuertes" exact render = {()=>(
          <div>
            <Title text={'PLATOS FUERTES'} image={"lunch.jpg"}/>
            <Recipes data={this.props.mainRecipes}/>
          </div>
        )}>
        </Route>

        <Route path = "/ensaladas" exact render = {()=>(
          <div>
            <Title text={'E N S A L A D A S'} image={"ensalada.jpg"}/>
            <Recipes data={this.props.saladRecipes}/>
          </div>
        )}>
        </Route>

        <Route path = "/sopas" exact render = {()=>(
          <div>
            <Title text={'S  O  P  A  S'} image={"sopas.jpg"}/>
            <Recipes data={this.props.soupRecipes}/>
          </div>
        )}>
        </Route>

        <Route path = "/snacks" exact render = {()=>(
          <div>
            <Title text={'S  N  A  C  K  S'} image={"snacks.jpg"}/>
            <Recipes data={this.props.snackRecipes}/>
          </div>
        )}>
        </Route>

        <Route path = "/postres" exact render = {()=>(
          <div>
            <Title text={'P O S T R E S'} image={"desserts.jpg"}/>
            <Recipes data={this.props.dessertRecipes}/>
          </div>
        )}>
        </Route>

        <Route path = "/healthy" exact render = {()=>(
          <div>
            <Title text={'H E A L T H Y'} image={"healthy.jpg"}/>
            <Recipes data={this.props.healthyRecipes}/>
          </div>
        )}>
        </Route>

        </BrowserRouter>
        
    );
  }
}

export default CategoryBar;
