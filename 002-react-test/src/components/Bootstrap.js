import React from 'react'

function Bootstrap() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin:'20px' }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://images.unsplash.com/photo-1593252591282-b62218d2d495?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Bootstrap
