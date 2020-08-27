import React from 'react';
import SpotIndexItem from './spot_index_item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCampground, faCaravan } from "@fortawesome/free-solid-svg-icons";
import SpotMap from '../spot_map/spot_map'; 


class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: this.props.spot_type,  
        }
    }

    filterByType(spot_type) {
        return (e) => this.props.requestSpots()
            .then(() => this.props.filterSpotByPark(this.props.park))
            .then(() => this.props.filterSpotByType(spot_type)) 
            .then(() => this.setState({ cat: spot_type })) 
            
    }

    filterByPark(park) {
        return (e) => (this.props.requestSpots()
            .then(() => this.props.filterSpotByPark(park))
        );
    }


    all() {
        return (e) => (this.props.requestSpots()
            .then(() => this.props.filterSpotByPark(this.props.park))
            .then(() => this.setState({ cat: "all" }))
        ); 
    }
    
    componentDidMount() {
        
        this.props.requestSpots()
            .then(() => this.props.filterSpotByPark(this.props.park))
            .then(() => this.props.filterSpotByType(this.props.spot_type))
    }

    renderMap() {
    
        if ((this.props.spots[0].park === this.props.park && this.props.spots[this.props.spots.length - 1].park === this.props.park) || 
            (this.props.park === "all" && this.props.spots.length < 23) ||
            (this.props.park === "all" && this.state.cat === "all")) {
                return (
                <SpotMap park={this.props.park} spots={this.props.spots} />
            )
        }
    }

    render() {
        
        if (this.props.spots.length > 0) {
            const campsSelected = this.state.cat === "camping" ? "spot-index-button-selected" : "";
            const glampsSelected = this.state.cat === "glamping" ? "spot-index-button-selected" : "";
            const rvsSelected = this.state.cat === "RV" ? "spot-index-button-selected" : "";
            const allSelected = this.state.cat === "all" ? "spot-index-button-selected" : ""; 
           
            return (
                <div className="spot-index">
                    <div className="spot-index-buttons">
                        <div className={`spot-index-button ${campsSelected}`} onClick={this.filterByType("camping")}>
                            <FontAwesomeIcon icon={faCampground} />
                            <p>Campsites</p> 
                        </div>
                        <div className={`spot-index-button ${glampsSelected}`} onClick={this.filterByType("glamping")}>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Lodging</p>
                        </div>
                        <div className={`spot-index-button ${rvsSelected}`} onClick={this.filterByType("RV")}>
                            <FontAwesomeIcon icon={faCaravan} />
                            <p>RVs</p>
                        </div>
                        <div className={`spot-index-button ${allSelected}`} onClick={this.all()}>All Listings</div>
                    </div>
                    {/* parks filters  
                    <div onClick={this.filterByPark("Big Sur")}>Big Sur</div>
                    <div onClick={this.filterByPark("Death Valley National Park")}>Death Valley</div>
                    <div onClick={this.filterByPark("Joshua Tree National Park")}>Joshua Tree</div>
                    <div onClick={this.filterByPark("Kings Canyon National Park")}>Kings Canyon</div>
                    <div onClick={this.filterByPark("Lassen Volcanic National Park")}>Lassen Volcanic</div>
                    <div onClick={this.filterByPark("Tahoe National Forest")}>Tahoe</div>
                    <div onClick={this.filterByPark("Yosemite National Park")}>Yosemite</div>
                     */}
                    <div className="spot-index-body">
                    <ul className="spot-index-list">
                        {this.props.spots.map((spot, idx) => (
                            < SpotIndexItem key={idx} spot={spot} />
                        ))}
                    </ul>
                    {this.renderMap()}
                    </div>
                </div>
            )
        } else {
            
            const campsSelected = this.state.cat === "camping" ? "spot-index-button-selected" : "";
            const glampsSelected = this.state.cat === "glamping" ? "spot-index-button-selected" : "";
            const rvsSelected = this.state.cat === "RV" ? "spot-index-button-selected" : "";
            const allSelected = this.state.cat === "all" ? "spot-index-button-selected" : "";

            return (
                <div className="spot-index">
                    <div className="spot-index-buttons">
                        <div className={`spot-index-button ${campsSelected}`} onClick={this.filterByType("camping")}>
                            <FontAwesomeIcon icon={faCampground} />
                            <p>Campsites</p>
                        </div>
                        <div className={`spot-index-button ${glampsSelected}`} onClick={this.filterByType("glamping")}>
                            <FontAwesomeIcon icon={faHome} />
                            <p>Lodging</p>
                        </div>
                        <div className={`spot-index-button ${rvsSelected}`} onClick={this.filterByType("RV")}>
                            <FontAwesomeIcon icon={faCaravan} />
                            <p>RVs</p>
                        </div>
                        <div className={`spot-index-button ${allSelected}`} onClick={this.all()}>All Listings</div>
                    </div>
                    <div className="spot-index-no-available">
                        <h1>Sorry, there are no available listings.</h1>
                    </div>
                </div>
                
            )
        }
    }
}

export default SpotIndex; 