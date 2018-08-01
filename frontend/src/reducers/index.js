import {
  
  ADDINGUSER,
  ADDEDUSER,
  EDITINGUSER,
  EDITEDUSER,
  LOGGINGIN,
  LOGGEDIN,
  LOGGINGOUT,
  LOGGEDOUT,


  GETTINGCLASSES,
  GOTCLASSES,
  ADDCLASS,
  ADDINGCLASS,
  ADDEDCLASS,
  EDITINGCLASS,
  EDITEDCLASS,
  DELETECLASS,
  DELETEDCLASS,
  GETTINGSTUDENTS,
  GOTSTUDENTS,
  ADDINGSTUDENT,
  ADDEDSTUDENT,
  DELETESTUDENT,
  DELETEDSTUDENT,
  ERROR
} from "../actions";

const initialState = {
  classes: [],
  students: [],
  users: [],
  authed: false,
  isAuthenticated: false,
  homepage: true,
  addingUser: false,
  loggingIn: false,
  loggingOut: false,
  addingClass: false
  // classEmpty: true,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // ========== ORDER: USER, CLASS, STUDENT ========= //
    case ADDINGUSER:
      return {
        ...state,
        addingUser: true
      };
    case ADDEDUSER:
      return {
        ...state,
        addingUser: false,
        users: action.users
      };

    case EDITINGUSER:
     return{...state, };
    case EDITEDUSER:
    return{}; 
    case LOGGINGIN:
      return { ...state, loggingIn: true };
    case LOGGEDIN:
      return {
        ...state,
        authed: true,
        user: action.payload
      };
    case LOGGINGOUT:
      return { ...state, loggingOut: true };
    case LOGGEDOUT:
      return { ...state, authed: false, isAuthenticated: false, loggingOut: false };


    case GETTINGCLASSES:
      return { ...state, gettingClass: true };
    case GOTCLASSES:
      return {
        ...state,
        classes: action.classes,
        gettingClass: false,
        error: null
      };
    case ADDINGCLASS:
      return { ...state, addingClass: true };
    case ADDEDCLASS:
      return {
        ...state,
        classes: [...state.classes, action.classes],
        addingClass: false
      };
    case EDITEDCLASS:
      return { ...state, classes: action.classes, editingClass: false };


    case GETTINGSTUDENTS:
      return { ...state, gettingStudents: true };
    case GOTSTUDENTS:
      return { ...state, students: action.students, gettingStudents: false };
    case ADDINGSTUDENT:
      return { ...state, addingStudent: true };
    case ADDEDSTUDENT:
      return { ...state, students: action.students, addingStudent: false };


    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};

export default Reducer;
