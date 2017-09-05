import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import cloneChildrenWithProps from "util/cloneChildrenWithProps";
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

  const combinedActions = actions.concat(props.actions);

  /**
   * @param e
   */
  const handleClick = (e) => {
    e.stopPropagation();
    props.openModal(props.modalKey);
  };

  const formWithProps = cloneChildrenWithProps(props.children, {
    initialValues: {
      id: props.id,
      modalKey: props.modalKey,
      ...props.additionalProps
    }
  });

  const actionButtonWithProps = cloneChildrenWithProps(props.actionButton, { handleClick });

  return (
    <span>

        {actionButtonWithProps}

        <Dialog
          className={"code--dialog"}
          title={props.dialogTitle}
          actions={combinedActions}
          modal={true}
          open={get(props.modals, `[${props.modalKey}].open`, false)}
        >
          {formWithProps}
        </Dialog>
      </span>
  );
};

export default CodeDialog;