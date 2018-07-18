import axios from 'axios';

const URL = 'https://lambda-labs-backend.herokuapp.com/';

export const GETTINGCLASSES = 'GETTINGCLASSES';
export const GOTCLASSES = 'GOTCLASSES';
export const ADDINGCLASS = 'ADDINGCLASS';
export const ADDEDCLASS = 'ADDEDCLASS';
export const ERROR = 'ERROR';

export const initClasses = () => dispatch => {
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

export const addClass = (theclass) => dispatch => {
    dispatch({ type: ADDINGCLASS 
    });
        axios
            .post('http://localhost:5000/api/classes', theclass)
            .then(request => {
                dispatch({ type: ADDEDCLASS, classes: request.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: 'Error adding friend...' })
            });

};



