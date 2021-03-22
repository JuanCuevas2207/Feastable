import FruitStyle from './Fruit.module.css';

const Fruit = (props) =>{

    const addAlimento = e=>{
        const id= e.target.id;
        const newFruits = [id, ...props.fruitList]
        props.setFruitList(newFruits);
    }

    return(
        <div id={props.id} className={FruitStyle.fruit} onClick={addAlimento}>
            <div id= {props.id} className={FruitStyle.imageContainer} style={{backgroundColor:props.color}}>
                <img id= {props.id} className = {FruitStyle.image} src={"/"+props.image} alt={props.name}></img>
            </div>
            <h2 id= {props.id} className={FruitStyle.name}>{props.name}</h2>
        </div>
    );


    };

  export default Fruit;