import Card from './Card'
import CardStyle from './Card.module.css';
import Carousel from './Carousel'
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
          <Carousel data = {this.state.fruitsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
          <Carousel data = {this.state.vegetablesData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
          <Carousel data = {this.state.seasoningsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
          <Carousel data = {this.state.proteinsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
          <Carousel data = {this.state.grainsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
          <Carousel data = {this.state.dairyData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
          <Carousel data = {this.state.liquorsData.map(foodData => <Card key = {foodData.id} cardList={this.state.cardList} setCardList= {this.setCardList} {...foodData} />)}></Carousel>
        </div>

        <button className={CardStyle.cartButton} onClick={()=>console.log(this.state.cardList)}>CONSOLE.LOG (MY CART)</button>
      </>
    );
  }
}
      
export default Cards;