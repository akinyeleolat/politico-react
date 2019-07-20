import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FlashMessage from './flashMessage';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../actions/flashMessages';

class FlashMessagesList extends Component {
  renderMessages() {
    return this.props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />
    ));
  }

  render() {
    return <Fragment>{this.renderMessages()}</Fragment>;
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessagesList);
