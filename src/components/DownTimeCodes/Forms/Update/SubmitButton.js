import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const RemoteSubmitButton = ({dispatch}) => (
  <RaisedButton
    label="Update"
    secondary={true}
    onClick={() => dispatch(submit('updateCode'))}
  />
)

export default connect()(RemoteSubmitButton)