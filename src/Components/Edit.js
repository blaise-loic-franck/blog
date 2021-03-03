import React, { Component } from 'react';
import 'bootstrap/js/dist/modal.js'
import 'bootstrap/dist/js/bootstrap.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                 id:-1,
                image:"", 
                auteur:"", 
                date:0,
                lien:"", 
                titre:"",
                corps:""
            
         }
         
    }
    componentDidMount = ()=>{
        this.setState(this.props.artReceive)
        
    }   
  
    handleChange = (e)=>{
        const {name, value} =e.target
        this.setState({[name]:value});
      
    }
    handleSubmit = (e)=>{
        e.preventDefault();
       let img= this.state.image.match(/[a-zA-Z0-9_-]+\.(png|jpg)/)[0];
        let editArt={id:this.state.id, 
            image:img, 
            auteur:this.state.auteur, 
            date:this.state.date,
            lien:this.state.lien, 
            titre:this.state.titre,
            corps:this.state.corps
        }
        this.props.edit(editArt)
        
        this.setState(this.iniState)
        console.log(this.state.auteur)
        toast("Vous avez modifier l'article avec succes!")
    }
    render() { 
         const   {id, auteur, date, lien, titre, corps} = this.state;
        
        console.log(this.state)
        return ( 
            <>
          
           
                    <form onSubmit={this.handleSubmit} className="">
                        <div className="row">
                        <div className="mb-3 col-3">
                            <label htmlFor="id" className="form-label">Id :</label>
                            <input type="text" onChange={this.handleChange} className="form-control" id="id"  name="id" value={id} readOnly/>
                        </div>
                        <div className="mb-3 col-9">
                        <label htmlFor="image" className="form-label">Image :</label>
                            <input type="file" onChange={this.handleChange} className="form-control" id="image"  name="image"  />
                        </div>
                        <div className="mb-3">         
                        <label htmlFor="titre" className="form-label">Titre :</label>                  
                            <input type="text" onChange={this.handleChange}  className="form-control" id="titre"  name="titre" value={titre} placeholder="Veuillez écrire le titre de l'article "/>
                        </div>
                            <div className="mb-3"> 
                            <label htmlFor="corps" className="form-label">Corps :</label>                               
                                <textarea onChange={this.handleChange} className="form-control" id="corps" name="corps" rows="3" value={corps} placeholder="Veuillez écrire un extrait de l'article "></textarea>
                            </div>
                            <div className="mb-3 col-6">
                            <label htmlFor="auteur" className="form-label">Auteur :</label>
                                <input type="text" onChange={this.handleChange}  className="form-control" id="auteur"  name="auteur" value={auteur} placeholder="Veuillez écrire le nom de l'auteur"/>                           
                            </div>
                            <div className="mb-3 col-6">
                            <label htmlFor="date" className="form-label">Date:</label>
                                <input type="text" onChange={this.handleChange}  className="form-control" id="date"  name="date" value={date} placeholder="Veuillez écrire la date de publication"/>                           
                            </div> 
                            <div className="mb-3 col-12">
                            <label htmlFor="lien" className="form-label">Lien :</label>
                                <input type="text" onChange={this.handleChange} className="form-control" id="lien" name="lien" value={lien} placeholder="Veuillez écrire le lien de l'article"/>                          
                                  
                            </div>
                            </div>
                            <button type="submit" className="btn btn-danger">Modifier</button>
                        </form>
                        <ToastContainer/>
            </>
         );
    }
}
 
export default Edit;