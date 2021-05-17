import React from 'react'


function Carousel() {
    return (
        <div>
            <div className="carousel-fade" id="carouselExampleFade">
                <div className="carousel-item active carousel-item-1">
                    <img src="https://picsum.photos/1920/800" className=" imgCar d-block" alt="1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='titleCar'>First slide label</h5>
                        <p className='descCar'>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item carousel-item-2">
                    <img src="https://picsum.photos/1280/800" className="imgCar d-block w-100" alt="2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='titleCar'>Second slide label</h5>
                        <p className='descCar'>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item carousel-item-3">
                    <img src="https://picsum.photos/1520/800" className="imgCar d-block w-100" alt="3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='titleCar'>Third slide label</h5>
                        <p className='descCar'>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Carousel;
