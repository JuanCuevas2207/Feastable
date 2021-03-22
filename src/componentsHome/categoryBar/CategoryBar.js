import catBarStyles from './CategoryBar.module.css';

const CategoryBar = () =>(
  <div className={catBarStyles.categoryBar}>
    <ul>
      <li><a>Desayunos</a></li>
      <li><a>Platos Fuertes</a></li>
      <li className={catBarStyles.activeCategory}><a>Ensaladas</a></li>
      <li><a>Sopas</a></li>
      <li><a>Snacks</a></li>
      <li><a>Postres</a></li>
      <li><a>Healthy</a></li>
      <li><a>Sporty</a></li>
    </ul>
  </div>
);

export default CategoryBar;
