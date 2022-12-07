import React from 'react'

function About(){

return(    
    <div className = "flex flex-row">
        <div className = "basis-1/3" ></div>
        <div className= "h-200 basis-1/5 "></div>
        <div className = "h-screen w-3/5 text align center bg-cover h-200 w-32 p-40 basis-3/5 bg-sky-500 text-white text-4xl" >
            <p>
            Dr. Peng is a board certified pediatrician and has been practicing medicine for X years. Dr. Peng  can speak both Mandarin and English. Dr. Peng did his residency at Maimonides Medical Center, in the very neighborhood where he started his medical journey. Dr. Peng is committed to providing the highest quality medical care to his patients. 
            </p>
        </div>
    </div>
)
}

export default About