import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }
 
  render() {
    const { type, text } = this.props.message;
    const options = {
    onClose: this.onClick
    }
    return (
      <Fragment>
        {type === 'success' ? toast.success(text, options): toast.error(text, options)}
      </Fragment>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;
