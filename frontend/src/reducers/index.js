const initialState = {
  // notes: [],
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
    default:
      return state;
  }
};

export default Reducer;