import CardStyle from './Card.module.css';

const Card = (props) =>{

    const addCard = e=>{
        const id= e.target.id;
        const newCards = [id, ...props.cardList]
        props.setCardList(newCards);
        console.log(id)
    }

    return(
        <div id={props.id} className={CardStyle.card} onClick={addCard}>
            <div id={props.id} className={CardStyle.imageContainer} style={{backgroundColor:props.color}}>
                <img id={props.id} className = {CardStyle.image} src={"/"+props.image} alt={props.name}></img>
            </div>
            <h2 id={props.id} className={CardStyle.name}>{props.name}</h2>
        </div>
    );


    };

  export default Card;