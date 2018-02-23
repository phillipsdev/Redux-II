import { IS_FETCHING, ADDING_FRIEND, FRIEND_ADDED, ERROR, FRIENDS_FETCHED } from '../actions/actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsAdded: false,
    addingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case IS_FETCHING:
            return { ...state, fetchingFriends: true };
        
        case FRIENDS_FETCHED:
            console.log('friends: ', action.payload);
            return {
                ...state, 
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            };
        
        case ADDING_FRIEND:
            return { 
                ...state,
                addingFriends: true
            }
        
        case FRIEND_ADDED:
            return {
                ...state,
                friendsAdded: true,
                addingFriends: false,
                friends: action.payload
            }
        
        case ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            };


        default:
            return state;
    }
}