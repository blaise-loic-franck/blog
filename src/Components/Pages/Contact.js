
import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            titre:"Contact"
         }
    }
    componentDidMount =()=>{
        const titre = this.state.titre
        this.props.give(titre)
    }
    render() { 
        return (  
           <>
           <div className="d-flex justify-content-center my-3">
                    <h1 className="text-center border border-2 border-dark p-3 mb-3">Me contacter</h1>
                </div>
           <div class="row mt-5 bg-light p-5">
        <div class="col-6 border-end">
            <div class="row">
                <div class=" col-5 ">
                    <label htmlFor="nom">Identité</label>
                    <input type="text" name="nom" placeholder="Votre Nom svp"/>
                    </div>
                    <div class="offset-1 col-5 mb-4">
                    <label htmlFor="mail">Mail:</label>
                    <input type="mail" name="mail" placeholder="Votre mail svp"/>
                </div>
                <div class=" col-10  mb-5">
                    <label htmlFor="message">Message :</label>
                    <textarea name="message" class="form-control mb-3" id="" cols="50" rows="5" placeholder="Ecrivez ici"></textarea>
                    <input type="submit" class="col-3"/>
                </div>
            </div>    
        </div>
    
        <div class="offset-1 col-4 ">
            <ul class = "list-unstyled">
                <li>Blaise Loic</li>
                <li>loic.blaise.franck@gmail.com</li>
                <li>06 84 11 37 31</li>
                <li>91700 Sainte Geneviève des bois</li>
            </ul>
        </div>
        <iframe class="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.9256694278088!2d2.332849415897219!3d48.63040442468582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d94677bf8915%3A0xb8508dc90ece67e1!2s27B%20Rue%20des%20Maisons%20Neuves%2C%2091700%20Sainte-Genevi%C3%A8ve-des-Bois!5e0!3m2!1sfr!2sfr!4v1606404226173!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    
    </div>
           </> 
        );
    }
}
 
export default Contact;

