import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PartyList from './partyList';
import DashBoardContainer from './../dashBoard';
import PartyForm from './createPartyForm';
import { createParty, getAllParty } from './../../actions/partyActions';
import { addFlashMessage } from './../../actions/flashMessages';
import Spinner from './../spinner/Spinner';
import Modal from './../modal';

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

        <DashBoardContainer title={'Party List'} button={isAdmin && (
          <Modal buttonLabel={'Add New Party'} title={'Create Party'} color={'danger'}>
          <PartyForm
            createParty={this.props.createParty}
            addFlashMessage={this.props.addFlashMessage}
          />
        </Modal>
        )
      }>
       
         { partyListItem.lenght <1 ? (<Spinner/>) : (
         <PartyList 
         key={partyListItem.id} 
         partyListItem={partyListItem}
         isAdmin={isAdmin} 
         />
         )}
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
