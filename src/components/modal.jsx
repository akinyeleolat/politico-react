import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.refreshPage = this.refreshPage.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  refreshPage(){
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Button color={this.props.color} onClick={this.toggle} className={this.props.color} style={{float:`${this.props.position}`}}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle && this.refreshPage}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
};
export default ModalComponent;
