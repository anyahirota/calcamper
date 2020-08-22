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
        if (this.props.spots !== undefined) {
            return (
                <div>
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