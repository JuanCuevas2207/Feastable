import {Component} from 'react'
import userNameStyles from '../userName/UserName.module.css'

class UserName extends Component{
    render(){
        return(
            <div className={userNameStyles.container}>
                <img src="assets/icons/default-pic.jpg" className={userNameStyles.pic} alt="profile"></img>
                <div className={userNameStyles.add}>
                    <img src="assets/icons/pencil.png" className={userNameStyles.addIcon} alt="pencil"></img>
                </div>
                <h1 className={userNameStyles.name}>GABRIEL NIEVES COSSON</h1>
            </div>
        );
    }
}

export default UserName;