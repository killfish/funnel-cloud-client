import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const RemoteSubmitButton = ({dispatch}) => (
  <RaisedButton
    label="Delete"
    secondary={true}
    onClick={() => dispatch(submit('deleteCode'))}
  />
)

export default connect()(RemoteSubmitButton)