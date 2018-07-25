import axios from "axios";
import jwt_decode from 'jwt-decode';
import { Route, Redirect } from 'react-router';

export const SIGNING_UP = "SIGNING_UP";
export const USER_CREATED = "USER_CREATED";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const GETTINGCLASSES = "GETTINGCLASSES";
export const GOTCLASSES = "GOTCLASSES";
export const ADDCLASS = "ADDCLASS";
export const ADDINGCLASS = "ADDINGCLASS";
// export const ADDEDCLASS = 'ADDEDCLASS';
export const EDITCLASS = "EDITCLASS";
export const EDITEDCLASS = "EDITEDCLASS";
export const DELETECLASS = "DELETECLASS";
export const DELETEDCLASS = "DELETEDCLASS";

export const ERROR = "ERROR";

export const GETTINGSTUDENTS = "GETTINGSTUDENTS";
export const ADDINGSTUDENT = "ADDINGSTUDENTS";
export const GOTSTUDENTS = "GOTSTUDENTS";
export const ADDEDSTUDENT = "ADDEDSTUDENT";
export const DELETESTUDENT = "DELETESTUDENT";
export const DELETEDSTUDENT = "DELETEDSTUDENT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const CREATEUSER = "CREATEUSER";

// const URL = "http://localhost:5000/api";
const URL = "https://lambda-labs-backend.herokuapp.com/api"

export const getClasses = () => dispatch => {
  dispatch({
    type: GETTINGCLASSES
  });

  axios
    .get(`${URL}/classes`)
    .then(response => {
      dispatch({ type: GOTCLASSES, classes: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error fetching the data..." });
    });
};

export const addClass = classItem => dispatch => {
  dispatch({
    type: ADDINGCLASS
  });
  axios
    .post(`${URL}/createclass`, classItem)
    .then(response => {
      dispatch({ type: ADDCLASS, classes: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Adding Class..." });
    });
};

export const editClass = (classid, classItem) => dispatch => {
  dispatch({
    type: EDITCLASS
  });
  axios.put(`${URL}/updateclass`, classItem).then(response => {
    dispatch({
      type: EDITEDCLASS,
      classItem: response.data,
      classid: response.data._id
    });
  });
};

export const deleteClass = classid => dispatch => {
  dispatch({
    type: DELETECLASS
  });
  axios.delete(`${URL}/deleteclass/${classid}`).then(response => {
    dispatch({
      type: DELETEDCLASS,
      classid: classid
    });
  });
};

export const getStudents = () => dispatch => {
  dispatch({
    type: GETTINGSTUDENTS
  });
  axios
    .get(`${URL}/api/:classid/students`)
    .then(response => {
      dispatch({ type: GOTSTUDENTS, students: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "Error Fetching Students..."
      });
    });
};

export const addStudent = student => dispatch => {
  dispatch({
    type: ADDINGSTUDENT
  });
  axios
    .post(`${URL}/api/:classid/students`, student)
    .then(request => {
      dispatch({ type: ADDEDSTUDENT, students: request.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Adding Student..." });
    });
};

export const deleteStudent = studentid => dispatch => {
  dispatch({
    type: DELETESTUDENT
  });
  axios
    .delet("http://localhost:5000/api/${classid}/${studentid)")
    .then(response => {
      dispatch({
        type: DELETEDSTUDENT,
        studentid: studentid
      });
    });
};

export const login = (user,history) => dispatch => {
    // console.log("history", history);
    console.log("user", user);
    axios
      .post(`${URL}/login`, {
        username: user.username,
        password: user.password
      })
      .then(res => {
        console.log('RESPONSE:', res)
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        if (token) {
            // Apply to every request
            axios.defaults.headers.common.Authorization = token;
          } else {
            delete axios.defaults.headers.common.Authorization;
          }
        alert("You are logged in!");

        dispatch(setCurrentUser(jwt_decode(token)));

        window.location.reload(true);
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
        alert("There was a user error while logging in, please try again");
      });
  };

  export const setCurrentUser = decoded => ({
    type: SET_CURRENT_USER,
    user: decoded,
  });

export const logOut = () => dispatch => {
  dispatch({
    type: logOut
  });
};

// export const register = user => dispatch => {
//     dispatch({ type: SIGNING_UP });
//     axios
//         .post(`${URL}/register`, user)
//         .then(response => {
//             dispatch({
//                 type: REGISTER,
//                 user: response
//             });
//             alert('You are registered! Click on Login to start magic randomizing!');
//         })
//         .catch((err) => {
//             dispatch({ type: ERROR, payload: err });
//             alert('The email already exists, try another email');
//           });
// };

export const signup = (data, history) => dispatch => {
  console.log("history", history);
  console.log("data", data);
  axios
    .post(`${URL}/register`, {
      username: data.username,
      password: data.password
    })
    .then(res => {
      alert("You are registered! Click on Login to start magic randomizing!");
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
      alert("There was a user error while logging in, please try again");
    });
};

//   user
//     .then(( newUser ) => {
//       dispatch({ type: REGISTER, payload: newUser });
//       alert('You are registered! Click on Login to start magic randomizing!');
//     })
//     .catch((err) => {
//       dispatch({ type: ERROR, payload: err });
//       alert('The email already exists, try another email');
//     });
