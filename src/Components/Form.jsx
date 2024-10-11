import React from "react";
import { Link } from "react-router-dom";
let User=()=>{
  let Validation=()=>{
    let ele=document.getElementById("Railin")
    //console.log(ele.value)
    window.localStorage.setItem("name",ele.value)
    let ele1=document.getElementById("Railinpas")
    window.localStorage.setItem("password",ele1.value)
  } 
    return(
        <>
                   <h1 style={{fontFamily:"cursive",color:"gray",textAlign:"center",marginTop:"20px"}}>Registration Form</h1>
                <div className="card1">
                        <img src="https://img.freepik.com/premium-vector/child-using-interactive-quiz-tools-cartoon-vector-set-white-background-isolated_873925-2045885.jpg?ga=GA1.1.1700452634.1719679908&semt=ais_hybrid" class="img-fluid rounded-start" alt="Regim"/>
                        <div  className="subcard1">
                        <form>
                      <input type="email" placeholder="EMAIL" className="Rinput"  id="Railin"/>
                          
                       <input type="password" placeholder="PASSWORD" className="Rinput" id="Railinpas"/>
                       <input type="password" placeholder="CONFORM PASSWORD" className="Rinput"/>
          
                        <Link to="/home">
                           <button type="submit" class="Rbtn" style={{marginTop:"10px",width:"250px"}} onClick={Validation}>Submit</button>
                        </Link> 
                           <Link to="/login">
                             <button type="submit" class="Rbtn" style={{marginTop:"10px",width:"250px"}}>cancel</button>
                                   </Link> 
                                     </form>
                           </div>
                        </div>

        
        
        </>
    )
}
export default User