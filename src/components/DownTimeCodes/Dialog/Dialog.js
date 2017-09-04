import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import "./Dialog.css";

export default class CodeDialog extends React.Component {
  state = {
    open: false,
    activeId: null
  };

  handleOpen = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    this.setState({open: true, activeId: id});
  };

  handleClose = (e) => {
    switch (this.props.action) {
      case 'add':
      case 'update':
        this.props.onClick(this.state.activeId);
        break;
      case 'delete':
        this.props.onClick(this.state.activeId);
        break;
    }

    this.setState({open: false, activeId: null});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <span>
        <IconButton
          data-id={this.props.id}
          onClick={this.handleOpen}
          tooltip={this.props.tooltip}
        >
          {this.props.icon}
        </IconButton>

        <Dialog
          className={"code--dialog"}
          title={this.props.dialogTitle}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          {this.props.children}
        </Dialog>
      </span>
    );
  }
}