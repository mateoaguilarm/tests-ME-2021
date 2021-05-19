import React from 'react'



function Card() {
    return (
        <div className='mainDiv_Card'>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/390/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary-card" data-bs-toggle="modal" data-bs-target="#card1">
                        More info
                    </button>
                    <div className="modal fade" id="card1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Card 1</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    asd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sadasd as sd sad
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/380/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary-card" data-bs-toggle="modal" data-bs-target="#card2">
                        More info
                    </button>
                    <div className="modal fade" id="card2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Card 2</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-primary-card" data-bs-toggle="modal" data-bs-target="#card3">
                        More info
                    </button>
                    <div class="modal fade" id="card3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Card 3</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
