import React from 'react'

export default function HomeData(props) {
    const {photo,title,des}=props;
  return (
      <div>
      <div className='Data' >
     
    <div className='desc' >
    <h1>{title}</h1>
    <h4>{des}</h4>
    </div>
    <div className="img-div">
    <img src={photo} alt="" />
    </div>
    </div>
    
    
    </div>
    
  )
}
