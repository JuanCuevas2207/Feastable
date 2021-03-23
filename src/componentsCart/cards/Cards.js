import Card from './Card'
import {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardStyle from './Card.module.css';


const Cards = () => {

  const[cardList, setCardList] = useState([]);

  const fruitsData = [
    {id: "F1", name:"Manzana", image:"assets/food/fruits/apple.png", color:"#C04343"},
    {id: "F2", name:"Durazno", image:"assets/food/fruits/peach.png", color:"#FF9900"},
    {id: "F3", name:"Fresa", image:"assets/food/fruits/strawberry.png", color:"#E81414"},
    {id: "F4", name:"Naranja", image:"assets/food/fruits/orange.png", color:"#EA741F"},
  ];

  const vegetablesData = [
    {id: "V1", name:"Cebolla", image:"assets/food/vegetables/onion.png", color:"#FFD196"},
    {id: "V2", name:"Lechuga", image:"assets/food/vegetables/lettuce.png", color:"#46C043"},
    {id: "V3", name:"Berenjena", image:"assets/food/vegetables/eggplant.png", color:"#720598"},
    {id: "V4", name:"Zanahoria", image:"assets/food/vegetables/carrot.png", color:"#F48636"},
    {id: "V5", name:"Pepino", image:"assets/food/vegetables/cucumber.png", color:"#088305"},
  ];

  const seasoningsData = [
    {id: "S1", name:"Sal", image:"assets/food/seasonings/salt.png", color:"#F2ECEC"},
    {id: "S2", name:"Pimienta", image:"assets/food/seasonings/pepper.png", color:"#531F09"},
    {id: "S3", name:"Jengibre", image:"assets/food/seasonings/ginger.png", color:"#CD9F65"},
    {id: "S4", name:"Ajo", image:"assets/food/seasonings/garlic.png", color:"#EBD0AE"},
    {id: "S5", name:"Romero", image:"assets/food/seasonings/romero.png", color:"#145B1B"},
  ];
  
  const proteinsData = [
    {id: "P1", name:"Carne", image:"assets/food/proteins/meat.png", color:"#813016"},
    {id: "P2", name:"Pescado", image:"assets/food/proteins/fish.png", color:"#B8B8B8"},
    {id: "P3", name:"Huevo", image:"assets/food/proteins/egg.png", color:"#E5C88F"},
    {id: "P4", name:"Pollo", image:"assets/food/proteins/chicken.png", color:"#A18F6C"},
  ];

  const dairyData = [
    {id: "D1", name:"Mantequilla", image:"assets/food/dairy/butter.png", color:"#E4CE00"},
    {id: "D2", name:"Leche", image:"assets/food/dairy/milk.png", color:"#B8B8B8"},
    {id: "D3", name:"Queso", image:"assets/food/dairy/cheese.png", color:"#DEA000"},
    {id: "D4", name:"Yogurt", image:"assets/food/dairy/yogurt.png", color:"#DA8A8A"},
  ];

  const grainsData = [
    {id: "G1", name:"Arroz", image:"assets/food/grains/rice.png", color:"#DDDDDD"},
    {id: "G2", name:"Frijol", image:"assets/food/grains/bean.png", color:"#5C1C21"},
    {id: "G3", name:"Garbanzo", image:"assets/food/grains/chickpea.png", color:"#D69D59"},
    {id: "G4", name:"Maiz", image:"assets/food/grains/corn.png", color:"#DEA513"},
  ];

  const liquorsData = [
    {id: "L1", name:"Vino", image:"assets/food/liquors/wine.png", color:"#747474"},
    {id: "L2", name:"Cerveza", image:"assets/food/liquors/beer.png", color:"#CE9400"},
    {id: "L3", name:"Whiskey", image:"assets/food/liquors/whiskey.png", color:"#473316"},
    {id: "L4", name:"Vodka", image:"assets/food/liquors/vodka.png", color:"#2E459A"},
  ];

  const fruits = fruitsData.map(fruitData => <Card key = {fruitData.id} cardList={cardList} setCardList= {setCardList} {...fruitData} />);
  const vegetables = vegetablesData.map(vegetableData => <Card key = {vegetableData.id} cardList={cardList} setCardList= {setCardList} {...vegetableData} />);
  const seasonings = seasoningsData.map(seasoningData => <Card key = {seasoningData.id} cardList={cardList} setCardList= {setCardList} {...seasoningData} />);
  const proteins = proteinsData.map(proteinData => <Card key = {proteinData.id} cardList={cardList} setCardList= {setCardList} {...proteinData} />);
  const dairy = dairyData.map(oneDairyData => <Card key = {oneDairyData.id} cardList={cardList} setCardList= {setCardList} {...oneDairyData} />);
  const grains = grainsData.map(grainData => <Card key = {grainData.id} cardList={cardList} setCardList= {setCardList} {...grainData} />);
  const liquors = liquorsData.map(liquorData => <Card key = {liquorData.id} cardList={cardList} setCardList= {setCardList} {...liquorData} />);

  const responsive = {
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 4,
      slidesToSlide: 1
    }
  }

  return(
    <>
    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {fruits}
      </Carousel>
    </div>

    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {vegetables}
      </Carousel>
    </div>

    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {seasonings}
      </Carousel>
    </div>

    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {proteins}
      </Carousel>
    </div>

    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {dairy}
      </Carousel>
    </div>

    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {grains}
      </Carousel>
    </div>

    <div className= {CardStyle.carousel}>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        centerMode= {true}
      >
        {liquors}
      </Carousel>
    </div>

    </>
  );
};
      
export default Cards;