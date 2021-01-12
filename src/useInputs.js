import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'RESET':
      return {
        username: '',
        email: '',
      };
    // Optimized Code
    // return Object.keys(state).reduce((acc, current) => {
    //   acc[current] = '';
    //   return acc;
    // }, {});
    default:
      throw new Error('Unhandled Action');
  }
};

const useInputs = (initialForm) => {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE',
      name,
      value,
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: 'RESET',
    });
  }, []);

  return [form, onChange, reset];
};

export default useInputs;
