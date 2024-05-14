import React from "react";

export default function({name, imgUrl, desc}){
    return (
        <div className="avatar">
            <div className="backgroundImg" style={{backgroundImage: `url(${imgUrl})`}}></div>
            <div className="header-1">
                 <h1>{name}</h1>
                 <p>{desc}</p>
            </div>
        </div>
    )
}