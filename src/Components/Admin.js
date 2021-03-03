import React, { Component } from 'react';
import Article from './Article';
import Edit from './Edit';
import {Modal} from 'react-bootstrap';
import { FaPlus  } from "react-icons/fa"
import Ajout from './Ajout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles:[   {id:1, image:"slide2.jpg", auteur:"Philippe Sainte-Laudy", date: "2018", lien:"https://www.naturephotographie.com/trouver-son-style-en-photographie/", titre:"TROUVER ET TRAVAILLER SON STYLE EN PHOTOGRAPHIE", corps:"Développer un style en photographie est l’un des aspects les plus passionnants et les plus gratifiants de la photographie. Pour beaucoup de photographes, il s’agit d’un processus continu et en constante évolution, influencé par de nombreux facteurs. Certains photographes trouvent un style unique qui leur convient, auquel ils s’attachent. D’autres peuvent développer deux styles dominants ou plus."},
                        {id:2, image:"slide3.jpg", auteur:"The Open Window", date: "26 janvier 2017" , lien:"https://usbeketrica.com/fr/article/une-breve-histoire-de-l-art-video", titre:"Une brève histoire de l’art vidéo", corps:"Depuis sa naissance à l’orée des sixties, l’art vidéo s’est imposé comme l’un des langages artistiques les plus riches et protéiformes de la création contemporaine. Et à l’heure du tout image et de la démocratisation de l’art, il n’a, semble-t-il, rien perdu de sa pertinence."},
                        {id:3, image:"slide4.jpg", auteur:"Kokoroe", date:"2017", lien:"https://www.kokoroe.fr/list/blockchain/article/retouche-photo-ce-qu-il-faut-savoir-519", titre:"Retouche photo : ce qu'il faut savoir !", corps:"Vous prenez des milliers de photos : des paysages, des portraits, des scènes de vie… Tout ce que vous voyez est matière à s’imprimer ! Maintenant que vous regardez votre bibliothèque de photographie, vous êtes satisfait…"}
            ],
            artChoose:{id:-1, 
                image:'', 
                auteur:'', 
                date:0,
                lien:'', 
                titre:'',
                corps:''
            },
            indexArt:-1,
            editMod:false,
            addMod:false,
            titre: "Administration"
         }
    }
    componentDidMount() {
        const titre = this.state.titre
        this.props.give(titre)
        let articles1= JSON.parse(localStorage.getItem('articlesKey'))
        let articlesadd = JSON.parse(localStorage.getItem('articlesAdd'));
        if(!articles1 || articles1.length === 0){
            localStorage.setItem('articlesAdd', JSON.stringify(this.state.articles));
            localStorage.setItem('articlesKey', JSON.stringify(this.state.articles));
            let recupArt = JSON.parse(localStorage.getItem('articlesKey'));
            this.setState({articles:recupArt});
                   }else{
            let articles2= JSON.parse(localStorage.getItem('articlesAdd'));
            this.setState({articles:articles2});
        }
    }
    handleRemove =(index)=>{
        console.group(index)
        let removeArt=[...this.state.articles]
        let supArt = removeArt.filter((v,id)=>{
            return  id !== index
        })
        this.setState({articles:supArt},()=>{
            localStorage.setItem('articlesKey', JSON.stringify(this.state.articles));
            localStorage.setItem('articlesAdd', JSON.stringify(this.state.articles))
            console.log(this.state);
        })
    }
    handleEdit = (index)=>{
        const aEdit = this.state.articles[index];
        this.setState({artChoose:aEdit,indexArt:index,  editMod:true});
        
        
    }
    modifArt =(data)=>{
        let artModif = [...this.state.articles]
        artModif[this.state.indexArt] = data
        this.setState({articles:artModif, editMod:false},()=>{
            localStorage.setItem('articlesKey', JSON.stringify(this.state.articles));
        })
    }
    handleAdd =(data)=>{
        let addArt = [...this.state.articles]
        data.id = this.state.articles[this.state.articles.length -1].id +1
        addArt.push(data)
        this.setState({articles:addArt, editMod:false},()=>{
            localStorage.setItem('articlesAdd', JSON.stringify(this.state.articles));
        })
        console.log(this.state.articles)
    }
    addClick= ()=>{
        this.setState({addMod:true})
    }
    handlePublish = (index)=>{
        const publi = JSON.parse(localStorage.getItem('articlesKey'))
        publi.push(this.state.articles[index])
        localStorage.setItem('articlesKey',JSON.stringify(publi))
        toast('Vous avez publié un article avec succes!')
    
    }
   
    render() { 
        return ( 
            <>
            <div className="text-end bg-light p-3">
            <button  type="button" onClick={this.addClick} className="button me-4 btn-warning fw-bolder "><FaPlus className="" size={30}/><p  className="mb-0 "> Ajouter </p></button>
            </div>
            <Article articles = {this.state.articles} removeClick ={this.handleRemove} editClick={this.handleEdit} publishClick ={this.handlePublish}/>
            
            <Modal show={this.state.editMod} className=" ">
            <Modal.Header className="h4 bg-secondary d-flex justify-content-center "><p className="mb-0 text-white">Formulaire d'édition</p></Modal.Header>  
            <Modal.Body className=" bg-light text-center fst-italic fw-bold">
            <Edit artReceive={this.state.artChoose} edit={this.modifArt} />
            </Modal.Body>
            </Modal>

            <Modal show={this.state.addMod} className=" ">
            <Modal.Header className="h4 bg-secondary d-flex justify-content-center "><p className="mb-0 text-white">Formulaire d'ajout</p></Modal.Header>  
            <Modal.Body className=" bg-light text-center fst-italic fw-bold">
            <Ajout update={this.handleAdd}/>
            </Modal.Body>
            </Modal>
            <ToastContainer/>
            </>
         );
    }
}
 
export default Admin;
