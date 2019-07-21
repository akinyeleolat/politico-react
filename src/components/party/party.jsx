import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PartyList from './partyList';
import DashBoardContainer from './../dashBoard';
import PartyForm from './createPartyForm';
import { createParty, getAllParty } from './../../actions/partyActions';
import { addFlashMessage } from './../../actions/flashMessages';
import Spinner from './../spinner/Spinner';

class Party extends Component {

  componentDidMount() {
    this.props.getAllParty();
  }


  render() {
    const partyListItem = this.props.parties;
    const isAuthenticated = this.props.isAuthenticated;
    let isAdmin;

    if (isAuthenticated) {
      isAdmin = this.props.user.isAdmin;
    }
    return (
      <Fragment>
        {isAdmin && (
        <DashBoardContainer title={' Create Party'}>
          <PartyForm
            createParty={this.props.createParty}
            addFlashMessage={this.props.addFlashMessage}
          />
        </DashBoardContainer>
        )
      }
        <DashBoardContainer title={'Party List'}>
         { partyListItem.lenght <1 ? (<Spinner/>) : (<PartyList key={partyListItem.id} partyListItem={partyListItem} />)}
        </DashBoardContainer>
      </Fragment>
    );
  }
}

Party.propTypes = {
  parties: PropTypes.array.isRequired,
  createParty: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  getAllParty: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ parties, authUser }) => ({
  parties: parties.parties,
  isAuthenticated: authUser.isAuthenticated,
  user: authUser.user,
});

export default connect(
  mapStateToProps,
  { createParty, addFlashMessage, getAllParty }
)(Party);
