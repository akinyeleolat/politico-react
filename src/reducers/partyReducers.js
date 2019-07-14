import { FETCH_PARTY } from './../actions/types';

const initialState = {
  parties: []
};

const PartyReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTY:
      return {
        ...state,
        parties: action.payload
      };
    default:
      return state;
  }
};
export default PartyReducers;
