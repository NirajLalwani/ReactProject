import React from 'react'
import { Link } from 'react-router-dom';
import web from '../Image.webp'


const Card = () => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>


                <div className="card">
                    <img src={web}

                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
