import React from 'react'; 

class SpotShow extends React.Component {

    componentDidMount() {
        
        this.props.requestSpot(this.props.match.params.id); 
    }

    render() {
        return (
            <div>
                <div>picture carousel</div>
                <div>location, name, nearby</div>
                <div>host, covid standards message, description </div>
                <div>campsite area/lodging, essentials, amenities, Camping vehicle details </div>
                <div>check in details</div>
                <div>activities</div>
                <div>terrain</div>
                <div>vibe, photos</div>
            </div>
        )
    }

}

export default SpotShow; 