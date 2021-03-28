import Card from './Card'
import CardStyle from './Card.module.css';
import axiosInstance from '../../axiosComponents/axiosInstance';
import {Component} from 'react'


class Cards extends Component{

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
        <div className= {CardStyle.carousel}>
          {this.state.fruitsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
          {this.state.vegetablesData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
          {this.state.seasoningsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
          {this.state.proteinsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
          {this.state.grainsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
          {this.state.dairyData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
          {this.state.liquorsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} removeFood={this.removeFood} {...foodData} />)}
        </div>

        <button className={CardStyle.cartButton} onClick={()=>console.log(this.state.cardList)}>CONSOLE.LOG (MY CART)</button>
      </>
    );
  }
}
      
export default Cards;