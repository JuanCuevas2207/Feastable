import Cards from "../Components/cards/Cards";
import NavigationBar from "../Components/cartNavigationBar/NavigationBar";
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import { Component } from 'react';
import Home from "./Home";
import { connect } from 'react-redux'
import Settings from "./Settings";
import RecipeDetails from "./RecipeDetails";
import SignUp from "./SignUp";
import * as actionCreators from '../Store/actions/food'
import Spinner from "../Components/spinner/Spinner";

class Cart extends Component {
        
    state = {
        cardList: [],
        fruitsData: [],
        vegetablesData: [],
        seasoningsData: [],
        proteinsData: [],
        dairyData: [],
        grainsData: [],
        liquorsData: [],
    }
		
	componentDidMount(){
		this.props.onFetchFood(this.changeState);
	}

    componentDidUpdate(){
        if(!this.props.isUserLoggedIn)
            this.props.history.push("/")
    }

	changeState = ()=>{
		this.setState({
            fruitsData: [...this.props.food[1]],
            vegetablesData: [...this.props.food[6]],
            seasoningsData: [...this.props.food[5]],
            proteinsData: [...this.props.food[4]],
            dairyData: [...this.props.food[0]],
            grainsData: [...this.props.food[2]],
            liquorsData: [...this.props.food[3]],
		})
	}

	renderContent= () => {
		let content = <Cards
        cardList={this.state.cardList}
        fruitsData={this.state.fruitsData}
        vegetablesData={this.state.vegetablesData}
        seasoningsData={this.state.seasoningsData}
        proteinsData={this.state.proteinsData}
        grainsData={this.state.grainsData}
        dairyData={this.state.dairyData}
        liquorsData={this.state.liquorsData}
        setCardList={this.setCardList}
        removeFood={this.removeFood}
    ></Cards>
	
		if (this.props.loadingFood) {
		  content =<Spinner></Spinner>
		}
		return content;
	};

    setCardList = (id) => {
        var updatedCards = [...this.state.cardList]
        updatedCards.push(id)
        this.setState({
                cardList: updatedCards
        })
    }

    removeFood = (id) => {
        const listId = id.substring(0, 1);

        let updatedFruits = [...this.state.fruitsData];
        let updatedVegetables = [...this.state.vegetablesData];
        let updatedSeasonings = [...this.state.seasoningsData];
        let updatedProteins = [...this.state.proteinsData];
        let updatedDairy = [...this.state.dairyData];
        let updatedGrains = [...this.state.grainsData];
        let updatedLiquors = [...this.state.liquorsData];

        if (listId === "F") {
                updatedFruits = [...this.state.fruitsData].filter(food => food.id !== id);
        } else if (listId === "V") {
                updatedVegetables = [...this.state.vegetablesData].filter(food => food.id !== id);
        } else if (listId === "S") {
                updatedSeasonings = [...this.state.seasoningsData].filter(food => food.id !== id);
        } else if (listId === "P") {
                updatedProteins = [...this.state.proteinsData].filter(food => food.id !== id);
        } else if (listId === "D") {
                updatedDairy = [...this.state.dairyData].filter(food => food.id !== id);
        } else if (listId === "G") {
                updatedGrains = [...this.state.grainsData].filter(food => food.id !== id);
        } else if (listId === "L") {
                updatedLiquors = [...this.state.liquorsData].filter(food => food.id !== id);
        }

        this.setState({
            fruitsData: updatedFruits,
            vegetablesData: updatedVegetables,
            seasoningsData: updatedSeasonings,
            proteinsData: updatedProteins,
            dairyData: updatedDairy,
            grainsData: updatedGrains,
            liquorsData: updatedLiquors,
        })
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Route path="/cart"  exact render={() => (
                        <>
                            <NavigationBar></NavigationBar>
                            {this.renderContent()}
                        </>
                    )}></Route>

                    <Route path="/desayunos" render={() => <Home />}></Route>
                    <Route path="/platos-fuertes" render={() => <Home />}></Route>
                    <Route path="/ensaladas" render={() => <Home />}></Route>
                    <Route path="/sopas" render={() => <Home />}></Route>
                    <Route path="/snacks" render={() => <Home />}></Route>
                    <Route path="/postres" render={() => <Home />}></Route>
                    <Route path="/healthy" render={() => <Home />}></Route>

                    <Route path = "/details" exact render = {()=><RecipeDetails></RecipeDetails>}></Route>
                    <Route path = "/settings" render= {()=><Settings></Settings>}></Route>
                    <Route path = "/signUp" render= {()=><SignUp></SignUp>}></Route>

                </BrowserRouter>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
        userLoggedIn: state.loggedStore.userLoggedIn,
		food: state.foodStore.food,
		loadingFood: state.foodStore.loadingFood,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		onFetchFood: (onSuccessCallback) => {
			dispatch(actionCreators.fetchFood(onSuccessCallback));
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));