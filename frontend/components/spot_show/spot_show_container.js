import { connect } from 'react-redux';
import { requestSpot } from '../../actions/spot_actions'; 
import { selectSpotHost } from '../../reducers/selectors';
import SpotShow from './spot_show'; 

const mapStateToProps = (state, ownProps) => {
    const spot = state.entities.spots[ownProps.match.params.id];
    return {
        spot,
        host: selectSpotHost(state, spot),
        reviews: Object.values(state.entities.reviews),
    };}

const mapDispatchToProps = (dispatch) => ({
    requestSpot: (spot) => dispatch(requestSpot(spot)), 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotShow); 