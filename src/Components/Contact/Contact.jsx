import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'

class Contact extends Component {

    render() {
        return <>
        <div className="contact py-5">
            <div className="container">
                <div className="des  d-flex justify-content-center align-items-center flex-column pt-4">
                    <h2>Contact Me</h2>
                    <div className="icon mt-3 mb-4">
                        <i class="fa-solid fa-star fa-2x"></i>
                    </div>
                </div>

                <div className="contct-form ">
                    <div className="row ">
                        <div className="col-lg-8 mx-auto">
                            <div className="form-data">
                                <form >
                                    <div className=' form-floating mb-3'>
                                        <input type="text" name="name" required id="name" className='w-100 form-control' placeholder='Name' />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className=' form-floating mb-3'>
                                        <input type="email" name="email" required id="email" className='w-100 form-control' placeholder='Email Address' />
                                        <label htmlFor="email">Email Address</label>
                                    </div>

                                    <div className=' form-floating mb-3'>
                                        <input type="number" name="phone" required id="phone" className='w-100 form-control' placeholder='Phone Number' />
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>
                                    <div class="form-floating">
                                        {/* <textarea  required id="Message" cols="30" rows="10"></textarea> */}
                                        <textarea className="form-control w-100 mb-3"  placeholder="Message" required id="Message"></textarea>
                                        <label for="Message">Message</label>
                                    </div>
                                    
                                    <button type="submit" className='mb-5'>Send</button>
                                   
                                    

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>;
    }
}

export default Contact;