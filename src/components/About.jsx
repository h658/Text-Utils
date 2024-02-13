import React, { useState } from 'react'

export default function About() {
//  const[myStyle, setMyStyle]= useState(
//     {
//         color: 'white',
//         backgroundColor:'black'
//     }
//  )
//  const [btnText, setbtnText]=useState("Enable Dark Mode") 

//  const changeStyle=()=>{
//     if(myStyle.color== 'white'){
//         setMyStyle({
//             color: 'black',
//             backgroundColor:'white'
//         })
//         setbtnText("Enable Dark Mode")
//     }
//     else{
//         setMyStyle({
//             color: 'white',
//             backgroundColor:'black' 
//     })
//     setbtnText("Enable Light Mode")
// }

    return (
        <div className="container" >
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                            What is a Text Utils?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                       <strong> TextUtils is simply a set of utility functions to do operations on String objects.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         Purpose of this Project
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                   <p>This project is prepared by a complete beginner who's trying to learn React. It isn't much but creator hopes to learn and be a little bit of help.</p>
                        </div>
                    </div>
                </div>
             
            </div>
            <div className="container my-3">
  {/* <button type="button" className="btn btn-primary" onClick={changeStyle}>{btnText}</button> */}
            </div>
            <img src="/public/beginner.jpg" alt="stairs" height= "290vh" />
            <img src="/public/comp.png" alt="stairs" height= "290vh" />
            <img src="/public/react.png" alt="stairs" height= "200vh" />
            <img src="/public/android-icon-72x72.png" alt="stairs" height= "80vh" />
        </div>
    )

}
