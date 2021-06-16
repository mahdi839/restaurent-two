import React from 'react'
import FooterData from './FooterData'
export default function Footer() {
  return (
    <div className=" container-fluid div-footer">
    <div className=' footer-con '>
    <div className="row">
    <div className="col-3">
    <FooterData
    title={'Help'}
    info={'Help'}
    info2={'Information'}
    info3={'Privacy' }
    info4={'Shipping Details'}
    
    />
    </div>
    <div className="col-3">
    
    <FooterData
    title={'Support'}
    info={'Contact Us'}
    info2={'About Us'}
    info3={'carees' }
    info4={'Refund & retuns'}
    
    />
    </div>
    <div className="col-3">
    
    <FooterData
    title={'Information'}
    info={'Search Terms'}
    info2={'Help & Facts'}
    info3={'Store Location' }
    info4={'Order & return'}
    
    />
    </div>
    <div className="col-3">
    
    <FooterData
    title={'Contact Us'}
    info={'No: 58 A, East Madison Street, Baltimore, MD, USA 4508'}
    info2={'+880 17345678'}
    info3={'www.Mahdi.com' }
   
    
    />
    </div>
    </div>
    

    </div>
    
    </div>
  )
}
