import { FilterVintage } from "@mui/icons-material";
import React from "react";


const FlavourItem = ({name, price, image}) => {
    return (
    <div className="flavourItem">
        <div className="backgroundImage" style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>);
}

export default FlavourItem;