import React from 'react';
import MarkerManager from '../../util/marker_manager'; 

class SpotMap extends React.Component {

    componentDidMount() {
   
        let lat; 
        let lng; 
        let zoom; 

        if (this.props.park === "all") {
            lat = 36.7783; 
            lng = -119.4179; 
            zoom = 6; 
        } else {
            lat = this.props.spots[0].lat; 
            lng = this.props.spots[0].lng; 
            zoom = 9; 
        }
        
        const mapOptions = {
            center: { lat: lat, lng: lng}, 
            zoom: zoom
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.spots);
    }
    
    render() {
        return (
            <div className="map"  >
                <div className="map-sticky">
                    <div id="map-container" ref={map => this.mapNode = map}>
                        
                    </div>
                </div>  
            </div>
        )
    }
}

export default SpotMap; 