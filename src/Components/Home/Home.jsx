import React, { Component } from 'react';
// import avataaars from '../../../images/avataaars.svg';
import avataaars from '../../images/avataaars.svg'
import './Home.css'
//  C:\hend\Route\Assignments\seconedreactassignment\src\images\avataaars.svg

class Home extends Component {

    render() {
        return <>

        <div className='home d-flex  justify-content-center align-items-center'>
            <div className="image w-25">
                <img src={avataaars} alt="home image" />
            </div>
            <h1>Start React</h1>
            <div className="icon mt-3">
            <i class="fa-solid fa-star fa-2x text-white"></i>
            </div>
            <p className='mt-4 text-white fs-3'>Graphic Artist - Web Designer - Illustrator</p>

        </div>
        </>;
    }
}

export default Home;