import React from 'react'; 
import SpotHeader from './spot_header'; 
import SpotAmenitites from "./spot_amenities"; 
import SpotDescriptionAndHost from "./spot_description_and_host"; 
import SpotCheckInDetails from "./spot_check_in_details"; 
import SpotTerrain from "./spot_terrain"; 
import SpotActivities from "./spot_activities";
import SpotVibe from "./spot_vibe";


class SpotShow extends React.Component {

    componentDidMount() {
        
        this.props.requestSpot(this.props.match.params.id); 
    }

    render() {
        
        if (this.props.spot !== undefined ) {
            return (
                <div className="spot-show">
                    {/* <div>picture carousel</div> */}
                    <SpotHeader name={this.props.spot.name} park={this.props.spot.park} nearby={this.props.spot.nearby_attractions} />
                    <SpotDescriptionAndHost description={this.props.spot.description} host={this.props.host}/>
                    <SpotAmenitites spot={this.props.spot} />
                    <SpotCheckInDetails spot={this.props.spot} />
                    <SpotActivities spot={this.props.spot} />
                    <SpotTerrain spot={this.props.spot} />
                    <SpotVibe spot={this.props.spot} />

                    {/* 
                    <div>check in details</div>
                    <div>activities</div>
                    <div>terrain</div>
                    <div>vibe, photos</div> */}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

}

export default SpotShow; 