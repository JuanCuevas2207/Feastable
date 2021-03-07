var NavigationBar = () =>(
		<div className="NavigationBar">
          <div className="header row py-2  align-items-center">
              <div className="col-lg-4 col-3 px-5">
                <img src="assets/logo.png" height="35px" className ="float-left"></img> 
              </div>
              <div className="col-lg-4 col-4 px-4 text-left">
                <div className="buscador rounded-pill">Buscar una receta...</div>
              </div>
              <div className="col-lg-4 col-5 px-5">
                <div className="float-right">
                  <a><img className="mx-md-2 menuImg" src="assets/add.png" alt="addIcon" height="33px"></img></a>
                  <a><img className="mx-md-2 menuImg" src="assets/save.png" alt="saveIcon" height="30px"></img></a>
                  <a><img className="mx-md-2 menuImg" src="assets/shopping-cart.png" alt="shoppingIcon" height="30px"></img></a>
                  <a><img className="rounded-circle mx-md-2 menuImg" src="assets/profile-pic.jpg" alt="pictureIcon" height="30px" width="30px"></img></a>
                </div>
              </div>       
          </div>
    	</div>
	);

export default NavigationBar;
