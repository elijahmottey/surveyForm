import React , { useState } from "react"


const Forms = () =>{

    const [Submit,setSubmit] =useState("click to submit");
    const HandleSubmit = () =>{
        setSubmit(()=>alert("forms submitted"))
    }
   
    return(
        <>
        <form >
            <div className="section-1">
              <label><input type="checkbox"/>Excellence</label>
              <label><input type="checkbox"/>Very Good</label>
            </div>
            <div className="section-2">
              <label><input type="checkbox"/>Average</label>
              <label><input type="checkbox"/>Poor</label>

            </div><br/>
            
            <button onClick={ HandleSubmit }>Submit</button>
           <br/> {Submit}
        </form>
        </>
    )

}

export default Forms