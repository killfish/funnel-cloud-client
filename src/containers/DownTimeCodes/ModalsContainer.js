import React from 'react';
import Dialog from 'components/DownTimeCodes/Dialog';
import { connect } from 'react-redux';
import {
  openModal,
  closeModal
} from 'containers/DownTimeCodes/actions/modals';

class Modals extends React.Component {
  render() {
    return (
      <Dialog {...this.props}/>
    );
  }
}

/**
 * @param state
 * @param ownProps
 * @returns {{props: *}}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    modals: state.modals,
    props: ownProps
  }
};

/**
 * @param dispatch
 * @returns {function()}
 */
const mapDispatchToProps = dispatch => {
  return {
    openModal: (key) => {
      dispatch(openModal(key));
    },
    closeModal: (modalName) => {
      dispatch(closeModal(key));
    },
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals);