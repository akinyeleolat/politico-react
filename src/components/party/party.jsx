import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PartyList from './partyList';

class Party extends Component {
  render() {
    const partyListItem = this.props.parties;
    return (
      <div className="dashboardcontainer">
        <form style={{ float: 'right' }}>
          <input type="text" placeholder="Search" />
          <button type="submit" className="button_1">
            Search
          </button>
          <Link to="/" style={{ float: 'right' }}>
            <button className="button_1">Refresh Page</button>
          </Link>
        </form>
        <section id="partyList">
          <h1>
            <i className="fas fa-users" /> Parties
          </h1>
          <PartyList partyListItem={partyListItem} />
        </section>
      </div>
    );
  }
}

Party.propTypes = {
  parties: PropTypes.array.isRequired
};

const mapStateToProps = ({ parties }) => ({
  parties: parties.parties
});

export default connect(
  mapStateToProps,
  null
)(Party);
