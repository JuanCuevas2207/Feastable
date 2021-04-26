import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = (props)=>{

    const responsive = {
        desktop: {
          breakpoint: { max: 1800, min: 1024 },
          items: 4,
          slidesToSlide: 1
        }
      }
      
    return(
        <ReactCarousel 
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
            {props.data}
        </ReactCarousel>
    )
}

export default Carousel;


 