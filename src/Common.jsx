import React from 'react'
import web from './hero.png'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
        <section className='d-flex align-items-center' style={{height:'75vh'}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    <div className='row my-auto '>
                        <div className='col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='heading' style={{textAlign:'center'}}>{props.name}<strong className='brand-name'> iGrow</strong></h1>
                            <h2 className='h-primary my-3'>We are the team of talented devlopers</h2>
                            <NavLink to={props.vist} className='turner'>
                             {props.btn_name}
                            </NavLink>
                        </div>
                    
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                        <img src={props.imgsrc} alt='just one image' className='img- fluid animated' id='animated' />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Common;