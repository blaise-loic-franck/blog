import React from 'react'

function NotFound() {
    const componentDidMount = ()=>{
        
setTimeout(this.props.history.push("/accueil"),10000)
    }
    return (

        <div>
            <h1>  </h1>
            <p>La page n'existe pas</p>
        </div>
    )
}

export default NotFound
