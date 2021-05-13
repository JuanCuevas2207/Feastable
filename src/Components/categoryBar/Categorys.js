import { NavLink } from 'react-router-dom';
import catBarStyles from './CategoryBar.module.css';

const Categorys = (props) =>{
    return(
        <div className={catBarStyles.categoryBar}>
            <ul>
            <NavLink to="/desayunos" activeClassName={catBarStyles.selected}>Desayunos</NavLink>
            <NavLink to="/platos-fuertes" activeClassName={catBarStyles.selected}>Platos Fuertes</NavLink>
            <NavLink to="/ensaladas" activeClassName={catBarStyles.selected}>Ensaladas</NavLink>
            <NavLink to="/sopas" activeClassName={catBarStyles.selected}>Sopas</NavLink>
            <NavLink to="/snacks" activeClassName={catBarStyles.selected}>Snacks</NavLink>
            <NavLink to="/postres" activeClassName={catBarStyles.selected}>Postres</NavLink>
            <NavLink to="/healthy" activeClassName={catBarStyles.selected}>Healthy</NavLink>
            </ul>
        </div>
    );
};

export default Categorys;