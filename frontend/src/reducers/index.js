import { GETTINGCLASSES, GOTCLASSES, ADDINGCLASS, ADDEDCLASS, ERROR } from '../actions';

const initialState = {
  classes: [],
  // modal: false,
  // loggingIn: false,
  // loggedIn: false,
  // error: null,
  // signingIn: false,
  homepage: true,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // case's go here: e.g. ADD_USER, ADD_STUDENT etc.
    case GETTINGCLASSES:
      return { ...state, retrieving: true};
    case GOTCLASSES:
      return { ...state, classes: action.classes, retrieving: false, error: null}
    case ERROR:
      return { ...state, error: action.errorMessage};
    case ADDINGCLASS:
      return { ...state, addingClass: true};
    case ADDEDCLASS:
      return { ...state, classes: action.classes, addingClass: false }
    default:  
      return state;
  }
};

export default Reducer;