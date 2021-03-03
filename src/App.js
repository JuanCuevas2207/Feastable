import './Home/Home.css';
import './Shared/Shared.css';
import React, {Component} from 'react';
import NavigationBar from "./Shared/NavigationBar";
import CategoryBar from "./Home/CategoryBar";
import Title from "./Home/Title";
import Content from "./Home/Content";

var App = () => 
	<div> 
		<NavigationBar /> 
		<CategoryBar /> 
		<Title text={'E N S A L A D A'}/>
		<Content />
	</div>

export default App;
