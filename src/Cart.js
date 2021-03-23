import Cards from "./componentsCart/cards/Cards";
import NavigationBar from "./componentsCart/navigationBar/NavigationBar";
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { Component } from 'react';
import Home from "./Home";


class Cart extends Component{
render(){
                return(
                        <>
                                <BrowserRouter>
                                        <Route path = "/" exact render = {()=>(
                                                <>
                                                        <NavigationBar></NavigationBar>
                                                        <Cards></Cards>
                                                </>
                                        )}/>

                                        <Route path = "/home" component= {Home}/>
                                </BrowserRouter>
                        </>
                )
        }
}
        
       
export default Cart;