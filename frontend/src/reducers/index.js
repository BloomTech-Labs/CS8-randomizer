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

  ADDINGCLASS,
  ADDEDCLASS,

  EDITINGCLASS,
  EDITEDCLASS,

  GETTINGSTUDENTS,
  GOTSTUDENTS,

  UPDATINGPARTICIPATION,
  UPDATEDPARTICIPATION,
  UPDATINGGRAPHDATA,
  UPDATEDGRAPHDATA,
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
  addingClass: false,
  editingUser: false,
  classes_empty: true,
  allMode: false,
  trackMode: false,
  updatingParticipation: false,
  updatingGraph: false
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
      return { ...state, editingUser: true };
    case EDITEDUSER:
      return { ...state, users: action.users, editingUser: false };
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
      return {
        ...state,
        authed: false,
        isAuthenticated: false,
        loggingOut: false
      };

    case GETTINGCLASSES:
      return { ...state, gettingClass: true };
    case GOTCLASSES:
      return {
        ...state,
        classes: action.classes,
        gettingClass: false,
      };
    case ADDINGCLASS:
      return { ...state, addingClass: true };
    case ADDEDCLASS:
      return {
        ...state,
        addingClass: false
      };

    case EDITINGCLASS:
     return{ ...state, editingClass: true}
    case EDITEDCLASS:
      return { ...state, editingClass: false };

    case GETTINGSTUDENTS:
      return { ...state, gettingStudents: true };
    case GOTSTUDENTS:
      return { ...state, students: action.students, gettingStudents: false };
    // case ADDINGSTUDENT:
    //   return { ...state, addingStudent: true };
    // case ADDEDSTUDENT:
    //   return { ...state, students: action.students, addingStudent: false };
    case UPDATINGPARTICIPATION:
      return { ...state, updatingParticipation: true };
    case UPDATEDPARTICIPATION:
      state.classes.forEach(item => {
        if (item._id === action.class_id) {
          return {
            ...state,
            updatingParticipation: false,
            classes: {
              ...state.classes[state.classes.indexOf(item)],
              participation: action.class_data.participation
            }
          };
        }
      });
      break
    case UPDATINGGRAPHDATA:
      return { ...state, updatingGraph: true };
    case UPDATEDGRAPHDATA:
      state.classes.forEach(item => {
        if (item._id === action.class_id) {
          return {
            ...state,
            updatingGraph: false,
            classes: {
              ...state.classes[state.classes.indexOf(item)],
              graph_data: action.class_data.graph_data
            }
          };
        }
      });
      break
    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};

export default Reducer;
