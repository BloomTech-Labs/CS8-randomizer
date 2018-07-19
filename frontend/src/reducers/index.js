import { GETTINGCLASSES, GOTCLASSES, ADDINGCLASS, ADDEDCLASS, EDITCLASS, 
EDITEDCLASS, DELETECLASS, DELETEDCLASS, GETTINGSTUDENTS, GOTSTUDENTS, 
ADDINGSTUDENT, ADDEDSTUDENT, DELETESTUDENT, DELETEDSTUDENT, ERROR } from '../actions';

const initialState = {
  classes: [],
  students: [],
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
      return { ...state, gettingClass: true};
    case GOTCLASSES:
      return { ...state, classes: action.classes, gettingClass: false, error: null}
    case ERROR:
      return { ...state, error: action.errorMessage};
    // case ADDCLASS:
    //   return {
    //     ...state,
    //     classes: [...state.classes, {...action.classes}]
    //   };
    // // case ADDINGCLASS:
    //   return { ...state, addingClass: true};
    // case ADDEDCLASS:
    //   return { ...state, classes: action.classes, addingClass: false };
    // case EDITCLASS:
    //   let copy = state.classes.slice();
    //   console.log('Class in reducer: ', action.classes);

    //   copy.filter(class => {

    //   };
    //   return { ...state, editingClass: true};
    case EDITEDCLASS:
      return { ...state, classes: action.classes, editingClass: false};
    case GETTINGSTUDENTS:
      return { ...state, gettingStudents: true };
    case GOTSTUDENTS:
      return { ...state, students: action.students, gettingStudents: false};
    case ADDINGSTUDENT:
      return { ...state, addingStudent: true};
    case ADDEDSTUDENT:
      return {...state, students: action.students, addingStudent: false};
    default:  
      return state;
  }
};

export default Reducer;