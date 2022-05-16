import "./Home.css"
import React from "react";
import Nav from "../../components/Nav/Nav";
import imageHome from "../../assets/img/image-home.svg"

export default function Home(){
    return (
        <div className="container-home">
            <Nav />
            <div className="box-right-home">

                <div className="box-header-home">
                    my account
                </div>
                <div className="box-image-home">
                    <img src={imageHome} alt="ilustration of a time of doctors"></img>
                </div>
            </div>
        </div>
    )
}