import { connect } from 'react-redux';
import SpotIndex from '../spot_index';
import { requestSpots, filterSpotByType, filterSpotByPark } from '../../../actions/spot_actions';

const mapStateToProps = (state) => ({
    spots: Object.values(state.entities.spots),
    park: "Joshua Tree National Park",
    spot_type: "all"
})

const mapDispatchToProps = (dispatch) => ({
    requestSpots: () => dispatch(requestSpots()),
    filterSpotByType: (spot_type) => dispatch(filterSpotByType(spot_type)),
    filterSpotByPark: (park) => dispatch(filterSpotByPark(park))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotIndex); 