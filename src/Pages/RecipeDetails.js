import { Component } from 'react';
import Details from "../Components/recipeDetails/Details";
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import Home from './Home';
import Login from './Login';

class RecipeDetails extends Component{
    componentDidUpdate(){
        if(!this.props.isUserLoggedIn)
            this.props.history.push("/")
    }

    render(){
        return(
            <BrowserRouter>
                <Route path="/details" render = {()=>(	
					<Details 
                        title={this.props.location.state.title}
                        duration={this.props.location.state.duration}
                        rating={this.props.location.state.rating}                   
                        imageURL={this.props.location.state.imageURL}>
                    </Details>
				)}></Route>

				<Route path = "/desayunos" render= {()=><Home/>}></Route>
				<Route path = "/platos-fuertes" render= {()=><Home/>}></Route>
				<Route path = "/ensaladas" render= {()=><Home/>}></Route>
				<Route path = "/sopas" render= {()=><Home/>}></Route>
				<Route path = "/snacks" render= {()=><Home/>}></Route>
				<Route path = "/postres" render= {()=><Home/>}></Route>
				<Route path = "/healthy" render= {()=><Home/>}></Route>
                <Route path="/" exact render = {()=>(<Login></Login>)}></Route>
            </BrowserRouter>
        )
    }

}

const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
	}
}

export default connect(mapStateToProps, null)(withRouter(RecipeDetails));