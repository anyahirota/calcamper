import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    filterByType(spot_type) {
        return (e) => (this.props.requestSpots()
            .then(() => this.props.filterSpotByType(spot_type))
        );  
    }

    filterByPark(park) {
        return (e) => (this.props.requestSpots()
            .then(() => this.props.filterSpotByPark(park))
        );
    }


    all() {
        return (e) => (this.props.requestSpots()); 
    }
    
    componentDidMount() {
        this.props.requestSpots()
            .then(() => this.props.filterSpotByPark(this.props.park))
            .then(() => this.props.filterSpotByType(this.props.spot_type))
    }

    render() {
        if (this.props.spots !== undefined) {
            return (
                <div>
                    {/* Buttons:
                    <div onClick={this.filterByType("camping")}>CAMPING</div>
                    <div onClick={this.filterByType("glamping")}>GLAMPING</div>
                    <div onClick={this.filterByType("RV")}>RV</div>
                    <div onClick={this.filterByPark("Big Sur")}>Big Sur</div>
                    <div onClick={this.filterByPark("Death Valley National Park")}>Death Valley</div>
                    <div onClick={this.filterByPark("Joshua Tree National Park")}>Joshua Tree</div>
                    <div onClick={this.filterByPark("Kings Canyon National Park")}>Kings Canyon</div>
                    <div onClick={this.filterByPark("Lassen Volcanic National Park")}>Lassen Volcanic</div>
                    <div onClick={this.filterByPark("Tahoe National Forest")}>Tahoe</div>
                    <div onClick={this.filterByPark("Yosemite National Park")}>Yosemite</div>
                    <div onClick={this.all()}>ALL</div> */}
                    <ul>
                        {this.props.spots.map((spot, idx) => (
                            < SpotIndexItem key={idx} spot={spot} />
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default SpotIndex; 