type initialStateType = {
  isLoading: boolean,
}

const initialState: initialStateType = {
  isLoading: false,
};

const appReducer = (state = initialState) => {
  return state;
};

export default appReducer;
