import React, { Component } from 'react';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './Admin';
import Ajout from './Ajout';
import Login from './Login';
import Logout from './Logout';
import Accueil from './Pages/Accueil';
import Contact from './Pages/Contact';
import Presentation from './Pages/Presentation';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import NotFound from './Pages/NotFound';





class Menu extends Component{
 
    constructor(props) {
        super(props);
        this.state = { 
            titre:""
         }
    }
 authenticate =()=>{
    const d = new Date();
        const test = d.toLocaleDateString();
        if(test === sessionStorage.getItem('token')){
            return true
        }else{
            return false
        }
}

recupTitle=(data)=>{
const newtitre = data;
this.setState({titre:newtitre})
}
    render(){
    return (
       <BrowserRouter>
           <main className="font">
       <header className=" container">
       <div className="text-center">
                    <h1 id="title" className="display-2"> {this.state.titre}</h1>
                    </div>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <img className="" src="./Images/logo.png"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-3 ">
                        <li className="nav-item">
                            <NavLink exact className="nav-link fw-bold" aria-current="page" to="/" ><span>Accueil</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/presentation" ><span>Présentation</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/contact"><span>Contact </span></NavLink>
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </div>
            
            
                {!this.authenticate()
                    ?<Button><NavLink className="nav-link bg-secondary text-white fw-bold" to="/login">Connection</NavLink></Button>
                    :<div className="row ">  <Button className=""><NavLink className="nav-link bg-secondary text-white mb-3 fw-bold " to="/logout">Déconnection</NavLink></Button>
                           <Button className=" "><NavLink className="nav-link bg-secondary text-white fw-bold" to="/admin123">Administration</NavLink></Button>
                    </div>
                }
           
        </nav>
       
       </header>
       
       
       <Switch>

       <Route path="/" exact render={()=>((<Accueil give={this.recupTitle}/> ))} />
       <Route path="/presentation" render={()=>((<Presentation give={this.recupTitle}/> ))} />
       <Route path="/contact" render={()=>((<Contact give={this.recupTitle}/> ))}/>
       <Route path="/logout" component={Logout} />
       <Route path="/login"  render={()=>(
            !this.authenticate()
            ?(<Login give={this.recupTitle}/>)
            :(<Redirect to={Admin}/>)
        )}  />
       <Redirect from='/admin123/reload' to="/admin123"/>
       <Route path='/admin123' render={()=>(
            this.authenticate()
            ?(<Admin give={this.recupTitle} />)
            :(<Redirect to={Login}/>)
        )}  />
       <Route path="*" component={NotFound} />
       </Switch>
       <Footer />
       </main>
       
       </BrowserRouter>
       
    )}
}

export default Menu
