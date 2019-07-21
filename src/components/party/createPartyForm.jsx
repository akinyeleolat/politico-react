import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import UploadLogo from './../uploadImage';
import { toast } from 'react-toastify';
import FlashMessagesList from './../../flash/flashMessagesList';
import ValidateInput from './../../validations/party';
import Spinner from './../spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import './party.css';

class CreatePartyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyName: '',
      partyDetail: '',
      hqAddress: '',
      logoUrl: '',
      errors: {},
      isLoading: false,
      invalid: false,
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.isValid = this.isValid.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  displayError(value) {
    if (value) {
      <div {...{ display: 'none' }}>{toast.error(value)}</div>;
    }
  }

  setUrl(url) {
    this.setState({ logoUrl: url });
  }

  isValid() {
    const { errors, isValid } = ValidateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.createParty(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Party created successfully'
          });
          window.location.reload()        
        },
        error => {
          this.setState({ errors: error.response.data, isLoading: false });
          const { errors } = this.state;
          const displayServerError = errors.error;
          this.props.addFlashMessage({
            type: 'error',
            text: `${displayServerError}`
          });
        }
      );
    }
  }
  render() {
    const { errors } = this.state;
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner/>;
    }
    return (
      <Fragment>
        <UploadLogo getUrl={this.setUrl} />
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter Party Name"
            name="partyName"
            value={this.state.partyName}
            onChange={this.onChange}
          />
          {this.displayError(errors.partyName)}
          <input
            type="text"
            placeholder="Enter Party Name in Full"
            name="partyDetail"
            value={this.state.partyDetail}
            onChange={this.onChange}
          />
          {this.displayError(errors.partyDetail)}
          <input
            type="text"
            placeholder="Enter Party Hq Address"
            name="hqAddress"
            value={this.state.hqAddress}
            onChange={this.onChange}
          />
          {this.displayError(errors.hqAddress)}
          {this.displayError(errors.logoUrl)}
          <input
            type="submit"
            value="Add Party to List"
            disabled={this.state.isLoading || this.state.invalid}
            className="button_3"
          />
        </form>
        <div style={{ display: 'none' }}>
          <FlashMessagesList />
        </div>
      </Fragment>
    );
  }
}
CreatePartyForm.propTypes = {
  createParty: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};
export default CreatePartyForm;
