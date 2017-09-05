import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const RemoteSubmitButton = ({dispatch}) => (
  <FlatButton
    label="Add"
    secondary={true}
    onClick={() => dispatch(submit('addCode'))}
  />
)

export default connect()(RemoteSubmitButton)