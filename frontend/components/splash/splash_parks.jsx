import React from 'react';
import { Link } from 'react-router-dom';

const SplashParks = () => {
    return (
        <div className="splash-parks">
            <h1>Discover California's Parks.</h1>
            <ul className="parks-list">
                <li className="park-box"> 
                    <Link to="/spots/bigsur">
                        <div className="park-pic-container">
                            <img src={window.big_sur} alt="big_sur" />
                        </div >
                        <div className="park-box-title">
                            <h1>Big Sur</h1> 
                        </div>
                    </Link>
                </li>
                <li className="park-box">
                    <Link to="/spots/tahoe">
                        <div className="park-pic-container">
                            <img src={window.tahoe} alt="tahoe" />  
                        </div >
                        <div className="park-box-title">
                            <h1>Tahoe</h1>
                        </div>
                    </Link>
                </li>
                <li className="park-box">
                    <Link to="/spots/deathvalley">
                        <div className="park-pic-container">
                            <img src={window.death_valley} alt="death_valley" />
                        </div >
                        <div className="park-box-title">
                            <h1>Death Valley</h1>
                        </div>
                    </Link>
                </li>
                <li className="park-box">
                    <Link to="/spots/lassenvolcanic">
                        <div className="park-pic-container">
                            <img src={window.lassen} alt="lassen" />
                        </div >
                        <div className="park-box-title">
                            <h1>Lassen Volcanic</h1>
                        </div>
                    </Link>
                </li>
                <li className="park-box">
                    <Link to="/spots/joshuatree">
                        <div className="park-pic-container">
                            <img src={window.joshua_tree} alt="joshua_tree" />
                        </div >
                        <div className="park-box-title">
                            <h1>Joshua Tree</h1>
                        </div>
                    </Link>
                </li>
                <li className="park-box">
                    <Link to="/spots/kingscanyon">
                        <div className="park-pic-container">
                            <img src={window.kings_canyon} alt="kings_canyon" />
                        </div >
                        <div className="park-box-title">
                            <h1>Kings Canyon</h1>
                        </div>
                    </Link>
                </li>
                <li className="big-park-box">
                    <div className="big-park-pic-container">
                        <img src={window.yosemite} alt="yosemite" />
                    </div >
                    <div className="splash-hosting-block">
                        <h1>Discover Yosemite National Park</h1>
                        <p>While best known for its waterfalls, in Yosemite, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area.</p>
                        <Link to="/spots/yosemite"><div className="splash-park-button">View Listings</div></Link>
                    </div>
                </li>
            </ul>


        </div>
    )
}

export default SplashParks; 