import React from 'react'
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div>
            <div className="container">
                <div className="img">
                    <img id="mainImg" src="https://justnoisetome.com/wp-content/uploads/2014/02/artworks-000070144916-4nompr-t500x500.jpg" />
                </div>
                <div className="login-content">
                    <form action="index.html">
                        <img src="https://justnoisetome.com/wp-content/uploads/2014/02/artworks-000070144916-4nompr-t500x500.jpg" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                
                                <input placeholder='user@example.com' type="text" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                
                                <input placeholder='password' type="password" className="input" />
                            </div>
                        </div>
                        <Link className='input' to="/">Back to Home</Link>
                        <input type="submit" className="btn-login" value="Log In" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn
