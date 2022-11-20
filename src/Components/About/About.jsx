import React, { Component } from 'react';
import './About.css'

class About extends Component {

    render() {
        return <>
        <div className="about py-5 ">
            <div className="container ">
                <div className="des text-white d-flex justify-content-center align-items-center flex-column">
                <h2>About</h2>
                <div className="icon mt-3 mb-4">
                    <i class="fa-solid fa-star fa-2x"></i>
                </div>
                </div>

                <div className="row text-white">
                    <div className="col-lg-4 ms-auto">
                        <div className="content">
                            <p>
                            Freelancer is a free bootstrap theme created by Route. 
                            The download includes the complete source files including HTML, 
                            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 me-auto">
                        <div className="content">
                            <p>
                                You can create your own custom avatar for the masthead, change the icon in the dividers, 
                                and add your email address to the contact form to make it fully functional!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        </>;
    }
}

export default About;