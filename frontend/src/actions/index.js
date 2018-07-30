import axios from "axios";
import jwt_decode from "jwt-decode";
import { Route, Redirect } from "react-router";

// NEED GETTINGUSERS
// NEED GOTUSERS

export const ADDINGUSER = "ADDINGUSER";
export const ADDEDUSER = "ADDEDUSER";

export const EDITINGUSER = "EDITINGUSER";
export const EDITEDUSER = "EDITEDUSER";

export const LOGGINGIN = "LOGGINGIN";
export const LOGGEDIN = "LOGGEDIN";
export const LOGGINGOUT = "LOGGINGOUT";
export const LOGGEDOUT = "LOGOUT";

export const GETTINGCLASSES = "GETTINGCLASSES";
export const GOTCLASSES = "GOTCLASSES";
export const ADDINGCLASS = "ADDINGCLASS";
export const ADDEDCLASS = "ADDEDCLASS";
export const EDITEDCLASS = "EDITEDCLASS";
export const EDITINGCLASS = "EDITINGCLASS";
export const DELETECLASS = "DELETECLASS";
export const DELETEDCLASS = "DELETEDCLASS";

export const GETTINGSTUDENTS = "GETTINGSTUDENTS";
export const GOTSTUDENTS = "GOTSTUDENTS";
export const ADDINGSTUDENT = "ADDINGSTUDENTS";
export const ADDEDSTUDENT = "ADDEDSTUDENT";
export const DELETESTUDENT = "DELETESTUDENT";
export const DELETEDSTUDENT = "DELETEDSTUDENT";

export const ERROR = "ERROR";

const URL = "https://lambda-labs-backend.herokuapp.com/api";
// const URL = "http://localhost:5000/api";

export const logIn = (user, history) => dispatch => {
  axios
    .post(`${URL}/login`, {
      username: user.username,
      password: user.password
    })
    .then(res => {
      console.log("RESPONSE:", res);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // if (token) {
      //     // Apply to every request
      //     axios.defaults.headers.common.Authorization = token;
      //   } else {
      //     delete axios.defaults.headers.common.Authorization;
      //   }
      alert("You are logged in!");
      const decoded_token = jwt_decode(token);
      dispatch({ type: LOGGEDIN, payload: decoded_token });

      window.location.reload(true); // Fixes bug where url appears but page does not load
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
      alert("There was a user error while logging in, please try again");
    });
};

export const logOut = () => dispatch => {
  dispatch({
    type: logOut
  });
};

export const addUser = (data, history) => dispatch => {
  dispatch({
    type: ADDINGUSER
  });
  axios
    .post(`${URL}/register`, {
      username: data.username,
      password: data.password
    })
    .then(res => {
      dispatch({ type: ADDEDUSER, payload: res });
      alert("You are registered! Click on Login to start magic randomizing!");
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
      alert("There was a user error while logging in, please try again");
    });
};

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


export const addClass = className => dispatch => {
  // ===== Create New Class and Add Logged in User as Ref ===== //
  console.log(jwt_decode(localStorage.jwtToken));
  const decoded_token = jwt_decode(localStorage.jwtToken);

  dispatch({
    type: ADDINGCLASS
  });
  axios
    .post(`${URL}/createclass`, {
      name: className,
      users: decoded_token.sub
    })
    .then(response => {
      // console.log("RESPONSE:", response);
      dispatch({ type: ADDEDCLASS, classes: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Adding Class..." });
    })

    .then(response => {
      // ======= Find ALL Classes associated with Logged in User ===== //
      dispatch({
        type: GETTINGCLASSES
      });

      axios
        .get(`${URL}/classes`)
        .then(response => {
          console.log(
            `THESE ARE ${decoded_token.username}'s CLASSES:`,
            response
          );
          // // console.log("Last Added Class ID", response.data[response.data.length-1]._id)
          const user_id = decoded_token.sub
          const class_id = response.data[response.data.length-1]._id
          dispatch({ type: GOTCLASSES, classes: response.data });

          dispatch({
            type: EDITINGUSER
          });

    //       // LAST STEP: Add CLASS ID to stored in "response" to logged in User
    //       console.log("user_id", user_id)
    //       console.log("class_id", class_id)
          axios // FIX THIS IN BACKEND
            .put(`${URL}/addtouser/${user_id}`, {
              classes: class_id
            })
            .then(res => {
              dispatch({ type: EDITEDUSER, payload: {classes: class_id}});
            })
            .catch(err => {
              dispatch({ type: ERROR, payload: err });
            });

          
        })
        .catch(err => {
          dispatch({ type: ERROR, errorMessage: "Error fetching classes..." });
        });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error fetching the data..." });
    });
};

export const editClass = class_data => dispatch => {
  dispatch({
    type: EDITINGCLASS
  });
  axios.put(`${URL}/updateclass`, class_data).then(response => {
    dispatch({
      type: EDITEDCLASS,
      class_data: response.data
    });
  });
};

export const deleteClass = classid => dispatch => {
  dispatch({
    type: DELETECLASS
  });
  axios.delete(`${URL}/deleteclass/${classid}`).then(response => {
    dispatch({
      type: DELETEDCLASS
    });
  });
};

export const getStudents = () => dispatch => {
  dispatch({
    type: GETTINGSTUDENTS
  });
  axios
    .get(`${URL}/:classid/students`)
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

export const addStudent = studentName => dispatch => {
  dispatch({
    type: ADDINGSTUDENT
  });
  axios
    .post(`${URL}/createstudent`, studentName)
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
    .delete("http://localhost:5000/api/${classid}/${studentid)")
    .then(response => {
      dispatch({
        type: DELETEDSTUDENT,
        studentid: studentid
      });
    });
};
