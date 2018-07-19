import axios from 'axios';
import server from '../../../server'
const URL = 'https://lambda-labs-backend.herokuapp.com/';

export const GETTINGCLASSES = 'GETTINGCLASSES';
export const GOTCLASSES = 'GOTCLASSES';
export const ADDCLASS = "ADDCLASS"
export const ADDINGCLASS = 'ADDINGCLASS';
// export const ADDEDCLASS = 'ADDEDCLASS';
export const EDITCLASS = "EDITCLASS";
export const EDITEDCLASS = "EDITEDCLASS";
export const DELETECLASS = "DELETECLASS";
export const DELETEDCLASS = "DELETEDCLASS";

export const ERROR = 'ERROR';

export const GETTINGSTUDENTS = 'GETTINGSTUDENTS';
export const ADDINGSTUDENT = "ADDINGSTUDENTS";
export const GOTSTUDENTS = "GOTSTUDENTS";
export const ADDEDSTUDENT = "ADDEDSTUDENT";
export const DELETESTUDENT = "DELETESTUDENT";
export const DELETEDSTUDENT = "DELETEDSTUDENT";


export const getClasses = () => dispatch => {
    dispatch({ type: GETTINGCLASSES
    });

        axios
            .get('http://localhost:5000/api/classes')
            .then(response => {
                dispatch({ type: GOTCLASSES, classes: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: 'Error fetching the data...'})
            })
}

export const addClass = (classItem) => dispatch => {
    dispatch({ type: ADDINGCLASS 
    });
        axios
            .post('http://localhost:5000/api/classes', classItem)
            .then(response => {
                dispatch({ type: ADDCLASS, classes: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: 'Error Adding Class...' })
             });

};

export const editClass = (classid, classItem) => dispatch => {
    dispatch({ type: EDITCLASS
    });
        axios
            .put('http://localhost:5000/api/${classid}', classItem)
            .then(response => {
                dispatch({
                    type: EDITEDCLASS,
                    classItem: response.data,
                    classid: response.data._id
                })
            })
}

export const deleteClass = classid => dispatch => {
    dispatch({ type: DELETECLASS
    });
        axios
            .delete('http://localhost:5000/api/${classid}')
            .then(response => {
                    dispatch({
                    type: DELETEDCLASS,
                    classid: classid
                });
            })
}   

export const getStudents = () => dispatch => {
    dispatch({ type: GETTINGSTUDENTS
    });
        axios
            .get('http://localhost:500/api/:classid/students')
            .then(response => {
                dispatch({ type: GOTSTUDENTS, students: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: 'Error Fetching Students...'
                })
            })
}

export const addStudent = student => dispatch => {
    dispatch({ type: ADDINGSTUDENT
    });
        axios
            .post('http://localhost:5000/api/:classid/students', student)
            .then(request => {
                dispatch({ type: ADDEDSTUDENT, students: request.data})
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: 'Error Adding Student...'})
            })
}

export const deleteStudent = studentid => dispatch => {
    dispatch({ type: DELETESTUDENT
    });
        axios
            .delet('http://localhost:5000/api/${classid}/${studentid)')
            .then(response => {
                dispatch({
                    type: DELETEDSTUDENT,
                    studentid: studentid
                })
            })
}




