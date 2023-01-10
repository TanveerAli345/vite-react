import React from "react"
import imgsrc from "./assets/picture.jpg"

export default function Info() {
    return (
        <>
            <img className="image" src={imgsrc} />
            <div className="info">
                <h1 className="name">Tanveer Ali Tapya</h1>
                <h2 className="job">Frontend Developer</h2>
                <a className="email" href="#">+91 89820 52700</a>
            </div>
            <div className="btn-container">
                <button className="email-btn btn"><i class="fa-solid fa-envelope"></i><a className="email-btn-a" target="_blank" href="mailto:tanveerali345@gmail.com">Email</a></button>
                <button className="linkedin-btn btn"><i class="fa-brands fa-linkedin"></i><a className="linkedin-btn-a" target="_blank" href="https://www.linkedin.com/in/tanveer-ali-tapya/">LinkedIn</a></button>
            </div>
        </>
    )
}