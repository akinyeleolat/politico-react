import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OfficeList from './officeList';
import DashBoardContainer from './../dashBoard';
import OfficeForm from './createOfficeForm';
import { createOffice, getAllOffice } from './../../actions/officeActions';
import { addFlashMessage } from './../../actions/flashMessages';
import Spinner from './../spinner/Spinner';
import Modal from './../modal';

class Offices extends Component {
  componentDidMount() {
    this.props.getAllOffice()
  }

  render() {
    const officeListItem = this.props.offices;
    const isAuthenticated = this.props.isAuthenticated;
    let isAdmin;

    if (isAuthenticated) {
      isAdmin = this.props.user.isAdmin;
    }
  
    return (
      <Fragment>
        <DashBoardContainer
          title={'Office List'}
          button={
            isAdmin && (
              <Modal
                buttonLabel={'Add New Office'}
                title={'Create Office'}
                color={'danger'}
              >
                <OfficeForm
            createOffice={this.props.createOffice}
            addFlashMessage={this.props.addFlashMessage}
          />
              </Modal>
            )
          }
        >
          {officeListItem.length<1 ? (<Spinner/>) : (
         <OfficeList 
         key={officeListItem.id} 
         officeListItem={officeListItem}
         isAdmin={isAdmin} 
         />
         )}
        </DashBoardContainer>
      </Fragment>
    );
  }
}

Offices.propTypes = {
  offices: PropTypes.array.isRequired,
  createOffice: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  getAllOffice: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ offices, authUser}) =>  ({
  offices: offices.offices,
  isAuthenticated: authUser.isAuthenticated,
  user: authUser.user
});

export default connect(
  mapStateToProps,
  { getAllOffice, createOffice, addFlashMessage }
)(Offices);
