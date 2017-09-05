import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { submit } from "redux-form";

const RemoteSubmitButton = ({ dispatch, props}) => {
  console.log('props', this.props)
  console.log('props', props)
  return (
    <RaisedButton
    label="Update"
    secondary={true}
    onClick={() => dispatch(submit('updateCode'))}
  />)
}

const mapStateToProps = state => {
  return {testing: 123};
}

export default connect(mapStateToProps)(RemoteSubmitButton)