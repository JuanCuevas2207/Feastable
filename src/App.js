import React, {Component} from 'react';
//CSS
import './components/navigationBar/NavigationBar.css';
import './components/categoryBar/CategoryBar.css';
import './components/title/Title.css';
import './components/recipes/Recipes.css';
//JS
import NavigationBar from "./components/navigationBar/NavigationBar";
import CategoryBar from "./components/categoryBar/CategoryBar";
import Title from "./components/title/Title";
import Recipe from "./components/recipes/Recipes"

var App = () => 
	<div> 
		<NavigationBar /> 
		<CategoryBar /> 
		<Title text={'E N S A L A D A S'}/>
		<Recipe/>
	</div>

export default App;
