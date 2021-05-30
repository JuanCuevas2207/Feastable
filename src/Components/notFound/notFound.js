import {Component} from 'react';
import notFoundStyles from './notFound.module.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom'
import Home from '../../Pages/Home';
import {connect} from 'react-redux'

class NotFound extends Component{
    render(){
        return(
            <Switch>
                <Route path="*" render={()=>
                    <div className={notFoundStyles.body}>
                        <img className={notFoundStyles.logo} src="assets/icons/logo.png" alt="logo"></img>
                        <h1 className={notFoundStyles.title}>404 Error</h1>
                        <h3>Page Not Found</h3>
                        {this.props.isUserLoggedIn ? <Link className={notFoundStyles.link} to="/desayunos">Ir a Feastable</Link> : <Link className={notFoundStyles.link} to="/">Ir a Feastable</Link>}
                    </div>
                }>

                </Route>
                    
                <Route path = "/desayunos" render= {()=><Home/>}></Route>  
            </Switch>
        );
    }
}

const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
	}
}

export default connect(mapStateToProps, null)(withRouter(NotFound));