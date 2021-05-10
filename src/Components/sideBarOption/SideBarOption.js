import {Component} from 'react'
import sideBarOptionStyles from '../sideBarOption/SideBarOption.module.css'

class SideBarOption extends Component{
    render(){
        return(
                <div className={sideBarOptionStyles.container}>
                    <div className={sideBarOptionStyles.decoration} ></div>
                    <img src={this.props.logo} alt={this.props.logo} className={sideBarOptionStyles.logo}></img>
                    <h1 className={sideBarOptionStyles.label}>{this.props.name}</h1>
                </div>
        );
    }
}

export default SideBarOption;


