import React from 'react'

let Others=(props)=>{
    return(
        <>
            <div className="container my-5">
                <h2 className='my-3'>{props.title}</h2>
                <p>{props.details}</p>
            </div>
        </>
    )
}

export default Others;