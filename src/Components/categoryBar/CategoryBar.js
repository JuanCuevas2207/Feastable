import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Title from "../categoryTitle/Title";
import Recipes from "../recipes/Recipes";
import Categorys from "./Categorys";
import { Component} from 'react';
import RecipeDetails from '../../Pages/RecipeDetails'
import NavigationBar from '../homeNavigationBar/NavigationBar';

class CategoryBar extends Component {

  render(){
    return(
        <BrowserRouter>  
          <Route path = "/desayunos" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'D E S A Y U N O S'} image={"breakfast.jpg"}/>
              <Recipes data={this.props.breakfastRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/platos-fuertes" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'PLATOS FUERTES'} image={"lunch.jpg"}/>
              <Recipes data={this.props.mainRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/ensaladas" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'E N S A L A D A S'} image={"ensalada.jpg"}/>
              <Recipes data={this.props.saladRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/sopas" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'S  O  P  A  S'} image={"sopas.jpg"}/>
              <Recipes data={this.props.soupRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/snacks" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'S  N  A  C  K  S'} image={"snacks.jpg"}/>
              <Recipes data={this.props.snackRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/postres" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'P O S T R E S'} image={"desserts.jpg"}/>
              <Recipes data={this.props.dessertRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/healthy" exact render = {()=>(
            <div>
              <NavigationBar></NavigationBar>
              <Categorys/>
              <Title text={'H E A L T H Y'} image={"healthy.jpg"}/>
              <Recipes data={this.props.healthyRecipes}/>
            </div>
          )}>
          </Route>

          <Route path = "/details" exact render = {()=><RecipeDetails></RecipeDetails>}></Route>

        </BrowserRouter>
    );
  }
}

export default CategoryBar;
