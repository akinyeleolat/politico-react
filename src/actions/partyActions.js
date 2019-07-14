import instance from './../config/axios';
import { FETCH_PARTY } from './../actions/types';

export const fetchParty = parties => {
  return {
    type: FETCH_PARTY,
    payload: parties
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
