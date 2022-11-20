import React, { Component } from 'react';
import './Copyright.css'

class Copyright extends Component {

    render() {
        return <>
        <div className="copyright bg-dark text-white text-center py-4">
            <div className="container">
                <p className='mb-0'>Copyright © Your Website 2021</p>
            </div>
        </div>
        </>;
    }
}

export default Copyright;