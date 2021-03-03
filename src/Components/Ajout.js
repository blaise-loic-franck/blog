import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  FaChevronLeft} from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Ajout extends Component {
    constructor(props) {
        super(props);
        this.iniState = { 
            id:-1,
            image:"", 
            auteur:"", 
            date:0,
            lien:"", 
            titre:"",
            corps:""

         }
         this.state = this.iniState
    }

    handleChange = (e)=>{
        const {name,value} = e.target
        this.setState({[name]:value});
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const img = this.state.image.match(/[a-zA-Z0-9_-]+\.(png|jpg)/)[0];
        const artAdd = {
            id:this.state.id, 
            image:img, 
            auteur:this.state.auteur, 
            date:this.state.date,
            lien:this.state.lien, 
            titre:this.state.titre,
            corps:this.state.corps
        };
        this.props.update(artAdd);
        this.setState(this.iniState)
        toast('Vous avez ajouter un article avec succes!')
    }
    render() { 
        return (
        <>
        <form onSubmit={this.handleSubmit}>

            <div className="mb-3">
                <input type="text" onChange={this.handleChange} className="form-control" id="id"  name="id"  readOnly/>
            </div>
            <div className="mb-3">
                <input type="file" onChange={this.handleChange} className="form-control" id="image"  name="image"  />
            </div>
            <div className="mb-3">                           
                <input type="text" onChange={this.handleChange}  className="form-control" id="titre"  name="titre"  placeholder="Veuillez écrire le titre de l'article "/>
            </div>
            <div className="mb-3">                                
                <textarea onChange={this.handleChange} className="form-control" id="corps" name="corps" rows="3"  placeholder="Veuillez écrire un extrait de l'article "></textarea>
            </div>
            <div className="mb-3">
                <input type="text" onChange={this.handleChange}  className="form-control" id="auteur"  name="auteur"  placeholder="Veuillez écrire le nom de l'auteur"/>                           
            </div>
            <div className="mb-3">
                <input type="text" onChange={this.handleChange}  className="form-control" id="date"  name="date"  placeholder="Veuillez écrire la date de publication"/>                           
            </div> 
            <div className="mb-3">
                <input type="text" onChange={this.handleChange} className="form-control" id="lien" name="lien"  placeholder="Veuillez écrire le lien de l'article"/>                          
                
            </div>
            <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
        <Link to="/admin123/reload" exact><FaChevronLeft/></Link>
        <ToastContainer/>
        </>
        
          );
    }
}
 
export default Ajout;