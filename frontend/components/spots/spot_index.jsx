import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.requestSpots();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.spots.map(spot => (
                        < SpotIndexItem spot={spot} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default SpotIndex; 