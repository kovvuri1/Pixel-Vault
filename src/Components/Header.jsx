import React from "react"
let AppHead=()=>{
    return(
        <>
        <nav className="navbar fixed-top bg-body-tertiary">
       <div className="container-fluid">
      <h1 style={{fontFamily: `"Matemasie", sans-serif`,textAlign:"center"}}>Pixel Vault</h1>
      <h2 style={{fontFamily: `cursive`,fontSize:"19px"}}>where every pixel tells a story in stunning clarity<span class="badge rounded-pill text-bg-info">Explore</span></h2>
      <button type="button" class="btn btn-primary position-relative">
              Profile
             <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
          </span>
          </button>
        </div>
        </nav>
        </>
    )
}
export default AppHead