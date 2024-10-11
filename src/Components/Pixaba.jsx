import React,{useEffect, useState} from "react";
import Cau from "./Caurosal"
import AppHead from "./Header"
let Api=()=>{
    let [api,setapi]=useState([]);
    let [apis,setapis]=useState("");
    useEffect(()=>{
        let api=fetch(`https://pixabay.com/api/?key=46193676-df551d4a6c4810d0aafbe87dc&q=${apis}&image_type=photo&pretty=true`);
        api.then(x=>x.json()).then(val=>{
            //console.log(val);
            setapi(val.hits)
        }).catch(console.log("unable to fetch data")
        )
    },[api]);
    let ele = (e)=>{
     setapis(e.target.value)};
    return(
        <>
        <AppHead/>
        <Cau></Cau>
        <input type="text" placeholder="Search here" onChange={ele} className="Main" style={{border:"2px solid",position:"absolute",top:"40vh",
            left:"450px",height:"46px"
        }} />
        <div style={{position:"relative",top:"8vh",left:"30px",width:"95vw",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        {   
            api.map(x=>{
                return(
                    <>
                    <img src={x.webformatURL} class="img-thumbnail" alt="cardimg" style={{height:"350px",width:"350px"}}></img>
                    </>
                    
                )
            })
        }
        </div>
        </>
    )
}
export default Api



