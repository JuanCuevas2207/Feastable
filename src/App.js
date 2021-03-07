import './components/navigationBar/NavigationBar.css';
import './components/categoryBar/CategoryBar.css';
import './components/title/Title.css';
import React, {Component} from 'react';
import NavigationBar from "./components/navigationBar/NavigationBar";
import CategoryBar from "./components/categoryBar/CategoryBar";
import Title from "./components/title/Title";

var App = () => 
	<div> 
		<NavigationBar /> 
		<CategoryBar /> 
		<Title text={'E N S A L A D A'}/>
	</div>

export default App;
