import React from "react";
import {FlavoursList} from '../assets/stuff/FlavoursList'
import FlavourItem from "../Components/FlavourItem";
import '../styles/Flavours.css'

const Flavours = () => {

    return (
        <div className="flavours">
            <h1 className="flavoursTitle">Flavours</h1>
            <div className="flavoursList">{FlavoursList.map((flavourItem, key) => {
                return <div> 
                    <FlavourItem name={flavourItem.name} price={flavourItem.price} image={flavourItem.image}/>
                </div>
            })}</div>
        </div>
    );
}


export default Flavours;