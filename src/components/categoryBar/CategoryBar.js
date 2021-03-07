var CategoryBar = () =>{
  return (
    <div className="CategoryBar row py-3 justify-content-center">
      <ul>
        <li><a>Desayunos</a></li>
        <li><a>Platos Fuertes</a></li>
        <li><a id="active">Ensaladas</a></li>
        <li><a>Sopas</a></li>
        <li><a>Snacks</a></li>
        <li><a>Postres</a></li>
        <li><a>Healthy</a></li>
        <li><a>Sporty</a></li>
      </ul>
    </div>
  );
}

export default CategoryBar;
