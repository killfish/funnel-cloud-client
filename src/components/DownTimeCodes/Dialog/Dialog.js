import React from 'react';
import SubmitButton from 'components/DownTimeCodes/Forms/Update/SubmitButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import "./Dialog.css";
import get from 'lodash/get';

/**
 * @param props
 * @returns {XML}
 * @constructor
 */
const CodeDialog = (props) => {

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={() => {props.closeModal(props.key)}}
    />,
    <SubmitButton />,
  ];

  return (
    <span>
        <IconButton
          data-id={props.id}
          onClick={() => {props.openModal(props.key)}}
          tooltip={props.tooltip}
        >
          {props.icon}
        </IconButton>

        <Dialog
          className={"code--dialog"}
          title={props.dialogTitle}
          actions={actions}
          modal={true}
          open={get(props.modals, `[${props.key}].open`, false)}
        >
          {props.children}
        </Dialog>
      </span>
  );
};

export default CodeDialog;