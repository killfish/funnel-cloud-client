import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const RemoteSubmitButton = ({dispatch}) => (
  <FlatButton
    label="Update"
    secondary={true}
    onClick={() => dispatch(submit('updateCode'))}
  />
)

export default connect()(RemoteSubmitButton)