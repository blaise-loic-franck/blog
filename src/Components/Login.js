import { Link } from '@material-ui/core';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login:"",
            pass:"",
            loginError:"",
            passError:"",
            errorMessage:"",
            titre: "Login"
            
         }
    }
    componentDidMount=()=>{
        const titre = this.state.titre;
        this.props.give(titre);
        
    }
    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value})
        if(!this.state.login || !this.state.pass ){
            const msg = "Veuillez ecrire dans les deux champs!"
            this.setState({errorMessage:msg})
        }else{
            this.setState({errorMessage:false})
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {login, pass} = this.state
        const d = new Date()
        const cle = d.toLocaleDateString()
        if(login =="Dupond" && pass =="123"){
            sessionStorage.setItem('token', cle);
        
            window.location.reload()

        }else if(login != "Dupond" || pass != "123" ){
            const msg = "Le mot de passe ou l'identifiant est erroné!"
            this.setState({errorMessage:msg})
        }
    }
    render() { 
        return ( 
            <>
            <div id="hLogin" className="position relative ">
                <div className=" position-absolute top-50 start-50 translate-middle row">
            <div className="card  " id="sizeLogin">
            <div className="card-title  text-center">
                <p className="h1 m-4">Connection</p>
            </div>
            <div className="card-body">
                {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
                <form className="p-3" onSubmit={this.handleSubmit}>
                    
                    <div className="mb-4">
                        <label htmlFor="login" className="form-label fw-bold">Identifiant :</label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="login" name="login" placeholder="Votre identifiant svp!"/>
                        <div id="emailHelp"  className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label fw-bold">Mot de passe :</label>
                        <input type="password" onChange={this.handleChange} className="form-control" id="pass" name="pass" placeholder="Votre mot de passe svp!"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div> 
        </div>
        </div>
            </> 
        );
    }
}
 
export default Login;