import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import spotsReducer from "./spots_reducer"; 
import bookingsReducer from "./bookings_reducer"; 

const entitiesReducer = combineReducers({ 
    users: usersReducer, 
    bookings: bookingsReducer,
    spots: spotsReducer, 
});

export default entitiesReducer;