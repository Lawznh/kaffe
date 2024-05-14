import React, {useState} from "react";
import coffelogo from "../assets/weblogo.png";
import {Link} from "react-router-dom";
import "../styles/Navbar.css"

//Icons
import MatUIButtonMenu  from '@mui/icons-material/DensitySmall';

function Navbar (){

    const[opennedLinks, setOpenLinks] = useState(false)


    const handleNavBar = () =>{
        setOpenLinks(!opennedLinks)
    }

    return (
    <div className="navbar">
        <div className="leftside" id={opennedLinks ? "open" : "close"}>
            <img src={coffelogo}/>

            <div className="hiddenLinks">
                <Link to ="/" >Home</Link>
                <Link to ="/flavours" >Flavours</Link>
                <Link to ="/history" >History</Link>
                <Link to ="/aboutus" >About us</Link>
            </div>

        </div>
        <div className="rightside">
            <Link to ="/" >Home</Link>
            <Link to ="/flavours" >Flavours</Link>
            <Link to ="/history" >History</Link>
            <Link to ="/aboutus" >About us</Link>

            <button onClick={handleNavBar}>
                <MatUIButtonMenu/>
            </button>
        </div>
    </div>

    )
    
}

export default Navbar