import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Collapse} from 'react-collapse';
class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            titre:"Présentation",
            cvCol:true,
            detCol:false
         }
    }
    componentDidMount =()=>{
        const titre = this.state.titre
        this.props.give(titre)
    }
    cvCollapse=()=>{
        this.setState({cvCol:true,detCol:false})
    }
    detailCollapse=()=>{
        this.setState({cvCol:false, detCol:true})
    }
    render() { 
        return (  
           <div className="font">
            <div>
                <Button type="button" onClick={this.cvCollapse} className=" border size px-5" >Curriculum vitae</Button>
                <Button type="button" onClick={this.detailCollapse} className=" border size px-5">Expériences détaillées</Button>
            </div>
            <Collapse isOpened={this.state.cvCol} className="collapse multi-collapse" >
           <section id="form-exp" className="row mt-4 bg-light">
           <div className="d-flex justify-content-center mb-3">
                    <h1 className="text-center border border-2 border-dark p-3 mb-3">Curriculum vitae</h1>
                    </div>
            <div className="col-6 right exp-form col-6 border-end border-2 border-dark  mb-3">
                <h2 className="mb-3 text-center h4">Formation</h2>
               <div className="row">
                    <div className="col-1 largeur">
                    2021
                    </div>
                    <div className="col-10 ">
                        <p id="form-nom">Formation développeur web & web mobile <br/> <em>Afpa Créteil</em>
                        <ul id="formation" className="text-muted">
                            <li>Maquettage d'une application</li>
                            <li>Réalisation d'une interface utilisateur web statique et adaptable</li>
                            <li>Développement en équipe d'une application web</li>
                            <li>Création d'une base de données</li>
                            <li >Développement des composants d'accès au données</li>
                        </ul>
                    </p>
                    </div>
                </div>
               <div className="row">
                    <div className="col-1 largeur">
                        2016
                    </div>
                    <div className="col-10">
                        <p>Licence Professionnelle Matériaux et Structures:<br/> Gestion, Conception et Industrialisation <br/><em>Université d'Evry Val d'Essonnes</em></p>
                    </div>
               </div>
                
            </div>
            <div className="offset-1 col-5 exp-form">
                <h2 className="mb-3 text-center h4">Expérience professionnelle</h2>
                <div className="row">
                    <div className="col-1 largeur">
                        2019 présent
                    </div>
                    <div className=" offset-1 col-10">
                        <p>Projet de création d'entreprise<br/> <em>LCVie, Sainte-Geneviève-Des-bois</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 largeur">
                        2018 9mois
                    </div>
                    <div className=" offset-1 col-10">
                        <p>Technicien d'essai mécanique <br/> <em>Cetim, Senlis</em></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 largeur">
                        2017 13mois
                    </div>
                    <div className=" offset-1 col-10">
                        <p>Technicien d'essai mécanique <br/> <em>Dassault Aviation, Argenteuil</em></p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-----------------------------             COMPETENCE             ----------------------> */}
        <section id="comp" className="bg-light">
            
            <h2 className="text-center h3">Compétences</h2> 
            <ul className="list-unstyled row row-cols-3 text-center mt-5 text-primary fw-bold h4">
                <li className="col mb-5">Gestion de planning</li>
                <li className="col">Rédaction de rapport</li>
                <li className="col">Suivi d'un cahier des charges</li>
                <li className="col">Gestion de projet</li>
                <li className="col">Adaptabilité aux situations</li>
                <li className="col mb-5">Transmition d'informations</li>
                
            </ul>
        </section>
        {/* <!----------------------------------      LANGAGES      --------------------------------> */}
        <section id="lang" className="bg-light">
            <h2 className="text-center h3">Langages</h2>
            <div className="row mt-4 mb-4">
                    
                    <div className="col-6 border-end border-2 border-dark  ">
                        <h3 className="h4 text-center  mb-4">Front-end</h3>
                        <ul className="text-center list-unstyled">
                            <li>html</li>
                            <li>CSS</li>
                            <li>JS</li>
                        </ul>
                    </div>
                    <div className=" offset-1 col-5">
                        <h4 className="h4 text-center mb-4">back-end</h4>
                        <ul className="premier text-center list-unstyled">
                        <li>PHP</li>
                        <li>MySql</li>
                        </ul>
                    </div>


                    <h3 className="text-center h3  my-4">Framework & Library</h3>
                    <div className="col-6 right col-6 border-end border-2 border-dark ">
                        <ul className="text-center list-unstyled">
                        <li className="">Bootstrap</li>
                        <li>ReactJs</li>
                        <li>Jquery</li> 
                        </ul>
                    </div>
                    <div className="offset-1  col-5">
                        <ul className="text-center list-unstyled">
                        <li>Symfony</li>
                            
                        </ul>
                    </div>
            </div>
        </section>
            {/* <!----------------------------------------          AUTRES             ----------------------------------> */}
        
        <section className="row text-center my-4 bg-light" id="autre">
            <div className="col-4 right ">
                <h2 className="h4 text-center mb-3 ">Langues</h2>
                <ul className=" row list-unstyled border-end border-2 border-dark ">
                    <li className="col">Français (maternelle)</li>
                    <li className="col">Anglais (intermediaire)</li>
                </ul>
            </div>
            <div className="col-4 right ">
                <h2 className="h4 text-center mb-3">Outils</h2>
                <ul className="row list-unstyled border-end border-2 border-dark">
                    <li className="col-4  mb-3">git hub</li>
                    <li className="col-4">WordPress</li>
                    <li className="col-4">Office</li>
                    <li className="col-4">Adobe</li>
                    <li className="col-4">Algobox</li>
                </ul>
            </div>
            <div className="col-4">
                <h2 className=" h4 text-center mb-3">Interêt</h2>
                <ul className="row list-unstyled ">
                    <li className="col-4  mb-3">Photographie</li>
                    <li className="col-4">Vidéo</li>
                    <li className="col-4">Lecture</li>
                    <li className="col-4">Cinema</li>
                    <li className="col-4">Sport</li>
                    <li className="col-4">LCVie</li>
                </ul>
            </div>
        </section>
        </Collapse>
        <Collapse isOpened={this.state.detCol} className="collapse multi-collapse ">
                <section className="mt-5 expDetail bg-light"   >
                    <div className="d-flex justify-content-center">
                    <h1 className="text-center border border-2 border-dark p-3 mb-3">Expériences détaillées</h1>
                    </div>
                <div className="tete detail fond mb-4">
                        <h1 className="h2">                    
                            LCVIE
                            <br/><span className="h4">Projet de création d'entreprise</span>
                        <br/>
                        </h1>
                        <p className="h5"> <em>Janvier 2019 - présent</em></p>
                    </div>
                    <p className="resume text-muted my-3">
                            LCVie est un projet de création entreprise dans l'audiovisuel, qui a pour ojectif de mettre en avant les acteurs du monde du sport par le biais de vidéos, à destination des réseaux-sociaux. <br/>
                            Aussi la création d'une page LCVie ( <a href="https://www.instagram.com/lcvie_healthyvie/?hl=fr">@lcvie_healthyvie</a>) a pour objectif de promouvoir le sport et le bien-être au plus grand nombre.
                    </p>
                    <div className="row">
                        <div className="col-6 right">
                            <h2 className="h4 text-center">Gestion de l'entreprise</h2>
                            <ul className="">
                                <li>Gestion de projet</li>
                                <li>Gestion et coordination d'équipe</li>
                                <li>Démarchage de clients</li>
                                <li>Mise en oeuvre de stratégie de marketing digital</li>
                                <li>Relation client</li>
                            </ul>
                        </div>
                        <div className="offset-1 col-5">
                            <h2 className="h4 text-center">Activité de l'entreprise</h2>
                            <ul>
                                <li>Auto-formation en prise de vu et de son</li>
                                <li>Auto-formation en montage</li>
                                <li>Réalisation audiovisuelle</li>
                                <li>Montage audiovisuel</li>
                                <li>Traitement de photos</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="row">
                        <p className="resume text-muted">
                            <a href="https://www.lcvie.com/"> www.lcvie.com</a> est un site vitrine qui redirige vers nos différents réseaux sociaux. <br/>
                            L'application lcvie sera une plateforme de mise en lien entre les sportifs où ils pourront discuter, partager leur interêt pour le sport et la nutrtion, se creer des groupe de sport ainsi que retrouver des conseils de nutrition et des programmes sportif à réaliser.
                        </p>
                        <div className="col-6 right">
                            <h2 className="h4 text-center">Développement du site web</h2>
                            <ul>
                                <li>Réalisation de maquettes</li>
                                <li>Développement du site web <a href="https://www.lcvie.com/">www.lcvie.com</a></li>                      
                            </ul>
                        </div>
                        <div className="offset-1 col-5">
                            <h2 className="h4 text-center">Application LCVie</h2>
                            <ul className="deux">
                                <li>Réalisation de maquette</li>
                            </ul>
                        </div>
                    </div>
                    
            </section>
            <section className="mt-5 expDetail bg-light" >
                <div className="tete detail fond mb-4">
                    <h1 className="h2">                    
                            Avnir Engineering
                        <br/><span className="h4 ">Technicien d'essais mécaniques (Prestation chez Dassault Aviation et le CETIM)</span>
                    <br/>
                    </h1>
                    <p className="h5"> <em>juin 2017 - mai 2019</em></p>
                </div>
                <p className="resume text-muted my-3">
                            J'ai travaillé au sein de l'entreprise de prestation Avnir Engineering en tant que Techinicien d'essai mécanique. Avec Avnir j'ai travailler au sein des équipes de Dassault Aviation (Argenteuil) et du CETIM (Senlis).
                            Dans ces deux entreprises, j'ai travaillé dans des Bureaux d'Etudes. Je testais différent matériaux afin de savoir s'ils correspondaient aux attentes du client.
                        </p>
                <div className="row">
                    <div className="col-6 right">
                        <h2 className="h4 text-center">Gestion des essais</h2>
                        <ul className="">
                            <li>Apprentissage de nouvelle méthode d'essai</li>
                            <li>Lecture et suivi du cahier des charges</li>
                            <li>Gestion du planning</li>
                            <li>Rédaction de rapport</li>
                        </ul>
                    </div>
                    <div className="offset-1 col-5">
                        <h2 className="h4 text-center">Compétence nécessaire</h2>
                        <ul>
                            <li>Travail au sein d'une équipe</li>
                            <li>Résolution de problème</li>
                            <li>Autonomie</li>
                            <li>Rigueur</li>
                            
                        </ul>
                    </div>
                </div>
                
            </section>
    </Collapse>
           </div> 
        );
    }
}
 
export default Presentation;