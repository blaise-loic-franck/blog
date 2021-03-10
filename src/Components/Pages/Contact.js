
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
                <li>Proche de la gare de Saint-Michel-Sur-Orge</li>
            </ul>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10546.638067474989!2d2.3066244!3d48.6354972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c7e5eae85ae5841!2sSaint%20Michel%20Sur%20Orge!5e0!3m2!1sfr!2sfr!4v1615405487448!5m2!1sfr!2sfr" width="800" height="600" allowfullscreen="" loading="lazy"></iframe>    </div>
           </> 
        );
    }
}
 
export default Contact;

