import { connect } from 'react-redux';
import { requestSpot } from '../../actions/spot_actions'; 
import SpotShow from './spot_show'; 

const mapStateToProps = (state, ownProps) => {
    
    return {
    spot: state.entities.spots[ownProps.match.params.id],
}}

const mapDispatchToProps = (dispatch) => ({
    requestSpot: (spot) => dispatch(requestSpot(spot)), 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotShow); 