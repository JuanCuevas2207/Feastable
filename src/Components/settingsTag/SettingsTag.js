import { Component } from 'react';
import tagStyles from '../settingsTag/SettingsTag.module.css';

class SettingsTag extends Component{
    render(){
        return(
            <div className={tagStyles.container}>
                <h1 className={tagStyles.label}>{this.props.name}</h1>
                <input
                    className={tagStyles.input}
                    value={this.props.value}
                    type=  {this.props.type}
                    onChange={()=>{}}
                ></input>
            </div>
        );
    }
}

export default SettingsTag