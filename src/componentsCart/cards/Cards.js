import Card from './Card'
import CardStyle from './Card.module.css';
import {Component} from 'react'


class Cards extends Component{

  render(){
    return(
      <>
        <div className= {CardStyle.carousel}>
          {this.props.fruitsData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {this.props.vegetablesData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {this.props.seasoningsData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {this.props.proteinsData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {this.props.grainsData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {this.props.dairyData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
          {this.props.liquorsData.map(foodData => <Card key = {foodData.id} cardList={this.props.cardList} setCardList= {this.props.setCardList} removeFood={this.props.removeFood} {...foodData} />)}
        </div>

        <button className={CardStyle.cartButton} onClick={()=>console.log(this.props.cardList)}>CONSOLE.LOG (MY CART)</button>
      </>
    );
  }
}
      
export default Cards;