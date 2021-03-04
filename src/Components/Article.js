import React  from 'react';
import { GrHide } from "react-icons/gr";
import { FaRegTrashAlt,FaPencilAlt  } from "react-icons/fa";
import { MdKeyboardCapslock, MdPublish  } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 const Article = (props)=>{
     const removeClick = ()=>{

    }

    const keys = JSON.parse(localStorage.getItem('articlesKey'));
 console.log(props.articles);
 console.log(keys);
 if(props.articles == keys){
     console.log(true)
 }else{
    console.log(false)

 }
    return (
        <>
            
             {props.articles.map((article, index)=>{ 

          return  <div key={index} className="card mb-3">
              
                    <div className="row ">
                        <div className="col-md-4">
                            <img src={`./Images/${article.image}`} alt="..."  className="col-12"/>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">{article.titre}</h5>
                                <p className="card-text">{article.corps}</p>
                                <p className="card-text"><small className="text-muted">{article.auteur} - {article.date}</small></p>
                                <a href={article.lien}>Lire la suite...</a>
                            </div>
                        </div>
                        <div className="col-2 d-flex flex-column justify-content-center text-center">
                        <div className=" mb-3 ">
                        <button onClick={()=>{
                            if(window.confirm("Voulez vous vraiment supprimer cet article?")){
                            {props.removeClick(index)}
                            toast.success("Vous avez supprimer l'article avec succès!")
                        } }}
                        className="button px-3 py-2 btn-danger"><FaRegTrashAlt size={25}/><p  className="mb-0 "> Supprimer </p></button>
                        </div>
                        <div className=" ">
                        <button onClick={()=>{props.editClick(index)}}className=" button mb-3 px-3 py-2 btn-success"> <FaPencilAlt size={25}/><p  className="mb-0 "> Editer </p></button>
                        </div>
                        <div>
                            
                         
                         {article[index] == keys[index]              
                        
                        ?<button onClick={()=>{props.publishClick(index)}}className=" button mb-3 px-3 py-2 btn-warning"> <MdPublish size={25}/><p  className="mb-0 "> Publier </p></button>
                        :<button onClick={()=>{props.hideClick(index)}}className=" button mb-3 px-3 py-2 btn-warning"> <GrHide size={25}/><p  className="mb-0 "> Cacher </p></button>
                        
                        }
                        
                            
                        </div>
                        <p className="fw-bolder">id : {article.id}</p>
                        
                        </div>
                        </div>
                    </div> 
 })
}
 <ToastContainer/>
        </>
    )
}

export default Article;

