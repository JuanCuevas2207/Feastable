import BrandStyles from './BrandBar.module.css';

const BrandBar = () =>{
    return(
        <div className={BrandStyles.header}>
            <img src="assets/icons/logo.png" alt="Logo" className={BrandStyles.logo}></img> 
        </div>
    );
};

export default BrandBar;