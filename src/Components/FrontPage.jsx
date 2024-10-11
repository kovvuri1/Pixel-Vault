import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css"
let FrontPage=()=>{
    return(
        <>
                        <div className="card">
                        <img src="https://img.freepik.com/free-photo/interior-decor-lamp-inspired-by-fruit_23-2151361969.jpg?ga=GA1.1.1700452634.1719679908&semt=ais_hybrid" class="img-fluid rounded-start" alt="Front"/>
                        <div  className="subcard">
                             <h5 style={{margin:"25px"}}>Exploration is the essence of the human spirit</h5>
                              <p style={{margin:"25px",fontFamily:"cursive"}}>Searching is half the fun: life is much more manageable when thought of as a scavenger hunt as opposed to a surprise party.</p>
                              <Link to="/register">
                                  <button className="Fbtn">  Login </button>
                              </Link>
                                <Link to="/login">
                              <button className="Fbtn">Register</button>
                                </Link>
                           </div>
                        </div>
        </>
    )
}
export default FrontPage