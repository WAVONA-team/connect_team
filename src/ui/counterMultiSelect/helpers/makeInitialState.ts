const makeInitialState = (array: string[]) => {
  const initialState = array.reduce((a, b) => {
    return {
      ...a,
      [b]: 0,
    };
  }, {});

  return initialState;
};

export default makeInitialState;
