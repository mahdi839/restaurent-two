import React from 'react'

export default function FooterData(props) {
    const {title,info,info2,info3,info4}=props;
  return (
    <div className='footer-data-div' >
    <h1>{title}</h1>
   <div className="footer-desc">
   <h4>{info}</h4>
   <h4>{info2}</h4>
   <h4>{info3}</h4>
   <h4>{info4}</h4>
   </div>
  
      
    </div>
  )
}
