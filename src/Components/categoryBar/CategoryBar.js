import catBarStyles from './CategoryBar.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';
import Title from "../categoryTitle/Title";
import Recipes from "../recipes/Recipes";
import { Component} from 'react';


class CategoryBar extends Component {

  render(){
    return(
        <BrowserRouter>
          <div className={catBarStyles.categoryBar}>
            <ul>
              <NavLink to="/desayunos" activeClassName={catBarStyles.selected}>Desayunos</NavLink>
              <NavLink to="/platos-fuertes" activeClassName={catBarStyles.selected}>Platos Fuertes</NavLink>
              <NavLink to="/ensaladas" activeClassName={catBarStyles.selected}>Ensaladas</NavLink>
              <NavLink to="/sopas" activeClassName={catBarStyles.selected}>Sopas</NavLink>
              <NavLink to="/snacks" activeClassName={catBarStyles.selected}>Snacks</NavLink>
              <NavLink to="/postres" activeClassName={catBarStyles.selected}>Postres</NavLink>
              <NavLink to="/healthy" activeClassName={catBarStyles.selected}>Healthy</NavLink>
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
