import './App.css';


function App() {
  return (
    <div className="App">
          <div className="header row py-2  align-items-center">
              <div className="col-4 px-5">
                <img src="assets/logo.png" height="35px" className ="float-left"></img> 
              </div>
              <div className="col-4 px-4 text-left">
                <div className="buscador rounded-pill">Buscar una receta...</div>
              </div>
              <div className="col-4 px-5">
                <div className="float-right">
                  <a><img className="mx-md-2" src="assets/add.png" height="33px"></img></a>
                  <a><img className="mx-md-2" src="assets/save.png" height="30px"></img></a>
                  <a><img className="mx-md-2" src="assets/shopping-cart.png" height="30px"></img></a>
                  <a><img className="rounded-circle mx-md-2" src="assets/profile-pic.jpg" height="30px" width="30px"></img></a>
                </div>
              </div>       
          </div>

          <div className="categories row py-2 justify-content-center align-items-center">
            <button>Desayunos</button>
            <button>Platos Fuertes</button>
            <button id="active">Ensaladas</button>
            <button>Sopas</button>
            <button>Snacks</button>
            <button>Postres</button>
            <button>Healthy</button>
            <button>Sporty</button>
          </div>

            <div className="layer">
              <div className="name">
              </div>
            </div>
            <h1>E N S A L A D A</h1>
          
    </div>
  );
}

export default App;
