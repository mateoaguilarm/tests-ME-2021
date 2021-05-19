import React from 'react'


function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/1920/800" className=" imgCar d-block" alt="1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='titleCar'>First slide label</h5>
                            <p className='descCar'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1280/800" className="imgCar d-block w-100" alt="2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='titleCar'>Second slide label</h5>
                            <p className='descCar'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1520/800" className="imgCar d-block w-100" alt="3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='titleCar'>Third slide label</h5>
                            <p className='descCar'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Carousel;
