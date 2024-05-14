import React from "react";
import { Link } from "react-router-dom";
import BannerBack from '../assets/cofffe.jpg'
import '../styles/Home.css'

function Home () {
    return (
        <div className="home" style={{backgroundImage : `url(${BannerBack})`}} >
            <div className="headerContainer">
                <h1>KAFFE</h1>
                <p>Spread love, spread coffe!</p>

                <Link to="/flavours">
                    <button>
                        Discover now!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;