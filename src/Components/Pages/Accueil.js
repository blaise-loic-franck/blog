import React, { Component } from 'react';
class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titre:`Bienvenue sur mon blog`,
           
          }
    }
    componentDidMount=()=>{
        const titre = this.state.titre;
        this.props.give(titre);
        
    }
    render() { 
       
        const articles = JSON.parse(localStorage.getItem('articlesKey'));
        console.log(localStorage.getItem('articlesKey'))
        return ( 
            <>
            <div className="d-flex justify-content-center mb-3">
                    <h1 className="text-center border border-2 border-dark p-3 my-4">Mes passions</h1>
                    </div>
            <div className="bg-light p-5 rounded-3">
                
                
               {articles.map((article,index)=>{
                    return  <div key={index} className="card mb-3">
                    <div className="row ">
                        <div className="col-md-5">
                            <img src={`./Images/${article.image}`} alt="..."  className="col-12"/>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body ">
                                <h5 className="card-title">{article.titre}</h5>
                                <p className="card-text">{article.corps}</p>
                                <p className="card-text"><small className="text-muted">{article.auteur} - {article.date}</small></p>
                                <a href={article.lien}>Lire la suite...</a>
                            </div>
                        </div>
                       
                        </div>
                    </div>
               })}
            </div>
            
            </>
         );
    }
}
 
export default Accueil;