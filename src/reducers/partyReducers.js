import { FETCH_PARTY, ADD_PARTY } from './../actions/types';

const initialState = {
  parties: [],
  party:'',
};

const PartyReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTY:
      return {
        ...state,
        parties: action.payload
      };
      case ADD_PARTY:
        return {
          ...state,
          party: action.payload
        };
    default:
      return state;
  }
};
export default PartyReducers;
