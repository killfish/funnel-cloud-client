import React from "react";
import UpdateButton from "components/DownTimeCodes/Forms/Update/SubmitButton";
import AddButton from "components/DownTimeCodes/Forms/Add/SubmitButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import "./Dialog.css";
import get from "lodash/get";

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
      onClick={(e) => {
        e.stopPropagation();
        props.closeModal(props.modalKey);
      }}
    />
  ];

  switch (props.action) {
    case 'update':
      actions.push(<UpdateButton />);
      break;
    case 'delete':
      actions.push(
        <FlatButton
          label="Delete"
          secondary={true}
          onClick={(e) => {
            e.stopPropagation();
            props.onSubmit(props.id);
            props.closeModal(props.modalKey);
          }}
        />);
      break;
    case 'add':
      actions.push(<AddButton />);
      break;
    default:
  }

  return (
    <span>
        <IconButton
          data-id={props.id}
          onClick={(e) => {
            e.stopPropagation();
            props.onClick(props.id);
            props.openModal(props.modalKey);
          }}
          tooltip={props.tooltip}
        >
          {props.icon}
        </IconButton>

        <Dialog
          className={"code--dialog"}
          title={props.dialogTitle}
          actions={actions}
          modal={true}
          open={get(props.modals, `[${props.modalKey}].open`, false)}
        >
          {props.children}
        </Dialog>
      </span>
  );
};

export default CodeDialog;