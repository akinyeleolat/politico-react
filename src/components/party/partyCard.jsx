import React from 'react';
import PropTypes from 'prop-types';

const PartyCard = props => {
  return (
    <div className="card" id={props.party.id}>
      <img src={props.party.logourl} />
      <p>{props.party.partyname.toUpperCase()}</p>
      <p>{props.party.partydetail.toUpperCase()}</p>
      <p>{props.party.hqaddress.toUpperCase()}</p>
    </div>
  );
};
PartyCard.propTypes = {
  party: PropTypes.object.isRequired
};
export default PartyCard;
