import React from 'react'
import { Link } from 'react-router-dom'
import web from '../Image.webp'

const Common = (props) => {
    return (
        <>
            <section id='header' className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row align-items-center d-flex">
                                <div className='col-md-6 pt-5 order-2 ~order-lg-1 align-items-start d-flex flex-column justify-content-center'>
                                    <h1>{props.heading}
                                        <strong>{props.strong}</strong>
                                    </h1>
                                    <h2 className='my-3 para'>
                                        We are the team of talented developer making a websites
                                    </h2>
                                    <div className='mt-3'>
                                        <Link to={props.Visit} className='btn btn-outline-primary px-4 py-2 rounded-3'>{props.content}</Link>
                                    </div>
                                </div>
                                <div className='col-md-6 order-1 order-lg-2 header-image'>
                                    <img src={web} alt="" className='w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common
