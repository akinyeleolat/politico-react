import instance from './../config/axios';
import { FETCH_PARTY, ADD_PARTY } from './../actions/types';

export const fetchParty = parties => {
  return {
    type: FETCH_PARTY,
    payload: parties
  };
};

export const addParty = party => {
  return {
    type: ADD_PARTY,
    payload: party
  };
};

export const getAllParty = () => {
  return dispatch => {
    return instance
      .get('/parties')
      .then(res => {
        dispatch(fetchParty(res.data.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createParty = data => {
  return async dispatch => {
    const res = await instance.post('parties', data);
    dispatch(addParty(res.data.data));
  };
};
