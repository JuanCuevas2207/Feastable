import Fruit from './Fruit'
import {useState} from 'react'

const Fruits = () => {

  const[fruitList, setFruitList] = useState([]);

  const fruitsData = [
    {id: 1, name:"Manzana", image:"assets/apple.png", color:"#C04343"},
    {id: 2, name:"Durazno", image:"assets/peach.png", color:"#FF9900"},
    {id: 3, name:"Fresa", image:"assets/strawberry.png", color:"#C05243"},
    {id: 4, name:"Naranja", image:"assets/orange.png", color:"#E8EC38"},
  ];
  
  const fruits = fruitsData.map(fruitData => <Fruit key = {fruitData.id} fruitList={fruitList} setFruitList= {setFruitList} {...fruitData} />);

  return(
    <div>
      {fruits}
    </div>
  );
};
      
export default Fruits;