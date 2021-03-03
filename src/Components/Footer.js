import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function Footer() {
  const  handleUp=()=>{
    window.scrollTo(0,0)
    }
    return (
        <>
        <div className="position-relative bg-secondary d-fle" id="footer">
        <div className="fw-bold position-absolute m-4" id="up"><FaArrowUp onClick={handleUp} size={30}/></div>
        <div className="fw-bold position-absolute start-50 top-50 translate-middle ">
        <div className="d-flex justify-content-center">
        </div>
            <p className="h5">Copyright © - 2021</p>  
        </div>
        </div>
        </>
    )
}

export default Footer;
