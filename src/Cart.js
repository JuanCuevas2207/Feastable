import Cards from "./componentsCart/cards/Cards";
import NavigationBar from "./componentsCart/navigationBar/NavigationBar";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Component } from 'react';
import Home from "./Home";
import axiosInstance from "./axiosComponents/axiosInstance"


class Cart extends Component{

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
            
        setCardList = (id)=>{
                var updatedCards = [...this.state.cardList]
                updatedCards.push(id)
                
                this.setState({
                        cardList: updatedCards
                }) 
        }
            
        removeFood= (id)=>{
                const listId = id.substring(0,1);

                let updatedFruits = [...this.state.fruitsData];
                let updatedVegetables = [...this.state.vegetablesData];
                let updatedSeasonings = [...this.state.seasoningsData];
                let updatedProteins = [...this.state.proteinsData];
                let updatedDairy = [...this.state.dairyData];
                let updatedGrains = [...this.state.grainsData];
                let updatedLiquors = [...this.state.liquorsData];
            
                if(listId==="F"){
                  updatedFruits = [...this.state.fruitsData].filter(food=>food.id!==id);
            
                }else if(listId==="V"){
                  updatedVegetables = [...this.state.vegetablesData].filter(food=>food.id!==id);
                }else if(listId==="S"){
                  updatedSeasonings = [...this.state.seasoningsData].filter(food=>food.id!==id);
                }else if(listId==="P"){
                  updatedProteins = [...this.state.proteinsData].filter(food=>food.id!==id);
                }else if(listId==="D"){
                  updatedDairy = [...this.state.dairyData].filter(food=>food.id!==id);
                }else if(listId==="G"){
                  updatedGrains = [...this.state.grainsData].filter(food=>food.id!==id);
                }else if(listId==="L"){
                  updatedLiquors = [...this.state.liquorsData].filter(food=>food.id!==id);
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
            
        componentDidMount(){
                axiosInstance.get("/foodData.json")
                .then(response=>{
            
                  const updatedFruitsData= response.data.fruits.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}});
                  const updatedVegetablesData= response.data.vegetables.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}})
                  const updatedSeasoningsData= response.data.seasonings.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}})
                  const updatedProteinsData= response.data.proteins.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}})
                  const updatedGrainsData= response.data.grains.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}})
                  const updatedDairyData= response.data.dairy.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}})
                  const updatedLiquorsData= response.data.liquors.map(food=>{return {id: food.id, name: food.name, image: food.image, color: food.color}})
            
                  this.setState({
                    fruitsData: updatedFruitsData,
                    vegetablesData: updatedVegetablesData,
                    seasoningsData: updatedSeasoningsData,
                    proteinsData: updatedProteinsData,
                    grainsData: updatedGrainsData,
                    dairyData: updatedDairyData,
                    liquorsData: updatedLiquorsData
                  })
                  
                }).catch(error=>
                  console.log(error)
                );
        }
            

        render(){
                return(
                        <>
                                <BrowserRouter>
                                        <Route path = "/" exact render = {()=>(
                                                <>
                                                        <NavigationBar></NavigationBar>
                                                        <Cards
                                                                cardList = {this.state.cardList}
                                                                fruitsData = {this.state.fruitsData}
                                                                vegetablesData = {this.state.vegetablesData}
                                                                seasoningsData = {this.state.seasoningsData}
                                                                proteinsData = {this.state.proteinsData}
                                                                grainsData = {this.state.grainsData}
                                                                dairyData = {this.state.dairyData}
                                                                liquorsData = {this.state.liquorsData}
                                                                setCardList = {this.setCardList}
                                                                removeFood = {this.removeFood}
                                                        ></Cards>
                                                </>
                                        )}></Route>

                                        <Route path = "/desayunos" render= {()=><Home id="1"/>}></Route>
                                        <Route path = "/platos-fuertes" render= {()=><Home id="2"/>}></Route>
                                        <Route path = "/ensaladas" render= {()=><Home id="3"/>}></Route>
                                        <Route path = "/sopas" render= {()=><Home id="4"/>}></Route>
                                        <Route path = "/snacks" render= {()=><Home id="5"/>}></Route>
                                        <Route path = "/postres" render= {()=><Home id="6"/>}></Route>
                                        <Route path = "/healthy" render= {()=><Home id="7"/>}></Route>
                                        
                                </BrowserRouter>
                        </>
                )
        }
}
        
       
export default Cart;