import Card from './Card'
import CardStyle from './Card.module.css';
import {Component} from 'react'


class Cards extends Component{
  render(){
    return(
      <>
        <div className= {CardStyle.carousel}>
          {Object.values(this.props.fruitsData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {Object.values(this.props.vegetablesData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {Object.values(this.props.seasoningsData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {Object.values(this.props.proteinsData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {Object.values(this.props.grainsData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {Object.values(this.props.dairyData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {Object.values(this.props.liquorsData).map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
        
          <button className={CardStyle.cartButton} onClick={()=>console.log(this.props.cardList)}>¿WHAT'S IN MY CART?</button>
        </div>
      </>
    );
  }
}
      
export default Cards;