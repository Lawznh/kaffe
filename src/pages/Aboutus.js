import React from "react";
import AvatarC from "../Components/Avatar";
import avatar1 from "../assets/avatars/seiIgu.png";
import avatar2 from "../assets/avatars/seigaba.jpg";

import '../styles/Aboutus.css'

const Aboutus = () => {
    return(
        <div className="aboutus">
            <div className="header-1">
                <AvatarC 
                     name="Igu Cuzevezdo" 
                     desc="The main creator of Kaffe's website i enjoy  life and sex"
                     imgUrl={avatar1}
                />

                <AvatarC 
                     name="Gaba Passeirola" 
                     desc="The sub creator of Kaffe's website i enjoy play games and stick around thr world"
                     imgUrl={avatar2}
                />
            </div>
        </div>
    );
}


export default Aboutus;