import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

    render() {
        return <>
        <footer className='text-center py-5 '>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4 mb-4">
                        <div className="info">
                            <h2>Location</h2>
                            <p>
                                2215 John Daniel Drive <br /> Clark, MO 65243
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="info">
                            <h2>About the Web</h2>
                            <div className="social d-flex justify-content-center align-items-center mt-4">
                                <a href="#"><div><i class="fab fa-fw fa-facebook-f "></i></div></a>
                                <a href="#"><div><i class="fab fa-fw fa-twitter"></i></div></a>
                                <a href="#"><div><i class="fab fa-fw fa-linkedin-in"></i></div></a>
                                <a href="#"><div><i class="fab fa-fw fa-dribbble"></i></div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="info">
                            <h2>About Freelanser</h2>
                            <p>
                                 Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        </>;
    }
}

export default Footer;