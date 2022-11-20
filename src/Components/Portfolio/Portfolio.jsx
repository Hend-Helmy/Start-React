import React, { Component } from 'react';
import cabin from '../../images/cabin.png'
import cake from '../../images/cake.png'
import circus from '../../images/circus.png'
import game from  '../../images/game.png'
import safe from '../../images/safe.png'
import submarine from '../../images/submarine.png'


import './Portfolio.css';

class Portfolio extends Component {

    render() {
        return <>
        <div className="portfolio container py-5">
            <div className="des d-flex justify-content-center align-items-center flex-column">
            <h2>Portfolio</h2>
            <div className="icon mt-3 mb-4">
                <i class="fa-solid fa-star fa-2x"></i>
            </div>
            </div>

            <div className="row g-5 ">
                <div className=" col-lg-4 col-md-6"  >
                    <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src={cabin} className="w-100 rounded" alt="cabin" />
                        <div className="overlay rounded">
                            <div className="plus">
                                <i class="fa-duotone fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6 ">
                    <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        <img src={cake} className="w-100 rounded" alt="cake" />
                        <div className="overlay rounded ">
                            <div className="plus bg-ganger">
                                <i class="fa-duotone fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <img src={circus} className="w-100 rounded" alt="circus" />
                        <div className="overlay rounded">
                            <div className="plus">
                                <i class="fa-duotone fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        <img src={game} className="w-100 rounded" alt="game" />
                        <div className="overlay rounded">
                            <div className="plus">
                                <i class="fa-duotone fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        <img src={safe} className="w-100 rounded" alt="safe" />
                        <div className="overlay rounded">
                            <div className="plus">
                            <i class="fa-duotone fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-lg-4 col-md-6">
                    <div className="image" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <img src={submarine} className="w-100 rounded" alt="submarine" />
                        <div className="overlay rounded">
                            <div className="plus ">
                                <i class="fa-duotone fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="main d-flex flex-column justify-content-center align-items-center py-5">
                            <div className="des d-flex justify-content-center align-items-center flex-column ">
                                <h2>LOG CABIN</h2>
                                <div className="icon mt-2  ">
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                            </div>
                            <div className="card-image w-75 rounded my-4">
                                <img src={cabin} className="w-100 rounded" alt="cabin" />
                            </div>
                            <p className='text-center w-75 mt-4 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Mollitia neque assumenda ipsam nihil, molestias magnam, 
                            recusandae quos quis inventore quisquam velit asperiores, vitae? 
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p> 

                            <button type="button" className="btn" data-bs-dismiss="modal">
                            <i class="fa-solid fa-xmark"></i> Close Window
                            </button>
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="main d-flex flex-column justify-content-center align-items-center py-5">
                            <div className="des d-flex justify-content-center align-items-center flex-column ">
                                <h2>TASTY CAKE</h2>
                                <div className="icon mt-2  ">
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                            </div>
                            <div className="card-image w-75 rounded my-4">
                                <img src={cake} className="w-100 rounded" alt="cabin" />
                            </div>
                            <p className='text-center w-75 mt-4 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Mollitia neque assumenda ipsam nihil, molestias magnam, 
                            recusandae quos quis inventore quisquam velit asperiores, vitae? 
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p> 

                            <button type="button" className="btn" data-bs-dismiss="modal">
                            <i class="fa-solid fa-xmark"></i> Close Window
                            </button>
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="main d-flex flex-column justify-content-center align-items-center py-5">
                            <div className="des d-flex justify-content-center align-items-center flex-column ">
                                <h2>CIRCUS TENT</h2>
                                <div className="icon mt-2  ">
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                            </div>
                            <div className="card-image w-75 rounded my-4">
                                <img src={circus} className="w-100 rounded" alt="cabin" />
                            </div>
                            <p className='text-center w-75 mt-4 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Mollitia neque assumenda ipsam nihil, molestias magnam, 
                            recusandae quos quis inventore quisquam velit asperiores, vitae? 
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p> 

                            <button type="button" className="btn" data-bs-dismiss="modal">
                            <i class="fa-solid fa-xmark"></i> Close Window
                            </button>
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="main d-flex flex-column justify-content-center align-items-center py-5">
                            <div className="des d-flex justify-content-center align-items-center flex-column ">
                                <h2>CONTROLLER</h2>
                                <div className="icon mt-2  ">
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                            </div>
                            <div className="card-image w-75 rounded my-4">
                                <img src={game} className="w-100 rounded" alt="cabin" />
                            </div>
                            <p className='text-center w-75 mt-4 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Mollitia neque assumenda ipsam nihil, molestias magnam, 
                            recusandae quos quis inventore quisquam velit asperiores, vitae? 
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p> 

                            <button type="button" className="btn" data-bs-dismiss="modal">
                            <i class="fa-solid fa-xmark"></i> Close Window
                            </button>
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="main d-flex flex-column justify-content-center align-items-center py-5">
                            <div className="des d-flex justify-content-center align-items-center flex-column ">
                                <h2>LOCKED SAFE</h2>
                                <div className="icon mt-2  ">
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                            </div>
                            <div className="card-image w-75 rounded my-4">
                                <img src={safe} className="w-100 rounded" alt="cabin" />
                            </div>
                            <p className='text-center w-75 mt-4 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Mollitia neque assumenda ipsam nihil, molestias magnam, 
                            recusandae quos quis inventore quisquam velit asperiores, vitae? 
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p> 

                            <button type="button" className="btn" data-bs-dismiss="modal">
                            <i class="fa-solid fa-xmark"></i> Close Window
                            </button>
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div className="main d-flex flex-column justify-content-center align-items-center py-5">
                            <div className="des d-flex justify-content-center align-items-center flex-column ">
                                <h2>SUBMARINE</h2>
                                <div className="icon mt-2  ">
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                            </div>
                            <div className="card-image w-75 rounded my-4">
                                <img src={submarine} className="w-100 rounded" alt="cabin" />
                            </div>
                            <p className='text-center w-75 mt-4 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Mollitia neque assumenda ipsam nihil, molestias magnam, 
                            recusandae quos quis inventore quisquam velit asperiores, vitae? 
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p> 

                            <button type="button" className="btn" data-bs-dismiss="modal">
                            <i class="fa-solid fa-xmark"></i> Close Window
                            </button>
                                                
                        </div>
                    </div>
                </div>
            </div>
        </div>





        </>;
    }
}

export default Portfolio;