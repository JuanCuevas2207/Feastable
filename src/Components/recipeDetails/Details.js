import { withRouter } from 'react-router-dom';
import detailsStyle from './Details.module.css'

const RecipeDetails = (props) =>{
    return(
        <>
            <div className={detailsStyle.container}>
                <div className={detailsStyle.image} style={{backgroundImage: props.imageURL}}></div>
                <div className={detailsStyle.col} style={{margin: "0px 0px 0px 80px"}}>
                    <h1 className={detailsStyle.title}>{props.title}</h1>
                    <div className={detailsStyle.row}>
                        <div className={detailsStyle.col}>
                            <h6 className={detailsStyle.rating}>
                                {props.rating < 1 ? <span className={detailsStyle.star}>☆</span> : <span className={detailsStyle.fullStar}>★</span>}
                                {props.rating < 2 ? <span className={detailsStyle.star}>☆</span> : <span className={detailsStyle.fullStar}>★</span>}
                                {props.rating < 3 ? <span className={detailsStyle.star}>☆</span> : <span className={detailsStyle.fullStar}>★</span>}
                                {props.rating < 4 ? <span className={detailsStyle.star}>☆</span> : <span className={detailsStyle.fullStar}>★</span>}
                                {props.rating < 5 ? <span className={detailsStyle.star}>☆</span> : <span className={detailsStyle.fullStar}>★</span>}
                            </h6>
                            <p className={detailsStyle.subTitles}>Rating</p>
                        </div>
                        <div className={detailsStyle.col}>
                            <h6 className={detailsStyle.titles}><img src="assets/icons/clock.png" height="40px" alt="Clock"></img> {props.duration} min</h6>
                            <p className={detailsStyle.subTitles}>Tiempo de preparacion</p>
                        </div>
                        <div className={detailsStyle.col}>
                            <h6 className={detailsStyle.titles}><img src="assets/icons/bookmark.png" height="40px" alt="Clock"></img></h6>
                            <p className={detailsStyle.subTitles}>Guardar receta</p>
                        </div>
                    </div>
                </div>            
            </div>
            <div className={detailsStyle.container}>
                <div className={detailsStyle.ingredientsCard}>
                    <p className={detailsStyle.containerTitles}>Ingredientes</p>
                </div>
                <div className={detailsStyle.recipeCard}>
                <p className={detailsStyle.containerTitles}>Receta</p>
                </div>
                
            </div>
        </>
    )
};

export default withRouter(RecipeDetails);