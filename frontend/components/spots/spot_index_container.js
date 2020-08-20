import { connect } from 'react-redux';
import SpotIndex from './spot_index'; 
import { requestSpots } from '../../actions/spot_actions'; 

const mapStateToProps = (state) => ({
    spots: Object.values(state.entities.spots)
})

const mapDispatchToProps = (dispatch) => ({
    requestSpots: () => dispatch(requestSpots()),
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpotIndex); 
