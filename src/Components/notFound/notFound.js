import {Component} from 'react';
import notFoundStyles from './notFound.module.css';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from '../../Pages/Home';

class NotFound extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route path="/aa" render={()=>
                <div className={notFoundStyles.body}>
                    <img className={notFoundStyles.logo} src="assets/icons/logo.png" alt="logo"></img>
                    <h1 className={notFoundStyles.title}>404 Error</h1>
                    <h3>Page Not Found</h3>
                    <Link className={notFoundStyles.link} to="/desayunos">Ir a Feastable</Link>
                </div>
            }>

            </Route>
                 
            <Route path = "/desayunos" render= {()=><Home/>}></Route>  
            </BrowserRouter>

        );
    }
}

export default NotFound;