import React from "react";
import IconButton from "material-ui/IconButton";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";
import { ModalsContainer } from "containers/DownTimeCodes";
import UpdateForm from "components/DownTimeCodes/Forms/Update/Form";
import AddForm from "components/DownTimeCodes/Forms/Add/Form";
import DeleteForm from "components/DownTimeCodes/Forms/Delete/Form";
import ActionUpdate from "material-ui/svg-icons/action/update";
import UpdateSubmitButton from "components/DownTimeCodes/Forms/Update/SubmitButton";
import AddSubmitButton from "components/DownTimeCodes/Forms/Add/SubmitButton";
import DeleteSubmitButton from "components/DownTimeCodes/Forms/Delete/SubmitButton";
import shortid from "shortid";
import "./Actions.css";

const styles = {
  actions: {
    height: 40,
    width: 40,
    margin: '0 -2px',
    color: '#aaa',
  }
};

const ActionUpdateButton = (props) => (
  <IconButton onClick={props.handleClick} style={styles.actions} tooltip={"Update Code"}>
    <ActionUpdate  className="codes--icon"/>
  </IconButton>
);

const ActionDeleteButton = (props) => (
  <IconButton onClick={props.handleClick} style={styles.actions} tooltip={"Update Code"}>
    <ActionDelete className="codes--icon"/>
  </IconButton>
);

const ActionAddButton = (props) => (
  <IconButton onClick={props.handleClick} style={styles.actions} tooltip={"Update Code"}>
    <ContentAddCircle className="codes--icon"/>
  </IconButton>
);

/**
 * @param props
 * @returns {XML}
 * @constructor
 */
const Actions = (props) => {

  return (
    <div className="codes--actions">
      <ModalsContainer
        id={props.id}
        action={"update"}
        actionButton={<ActionUpdateButton />}
        actions={[<UpdateSubmitButton />]}
        modalKey={shortid.generate()}
        onSubmit={props.handleUpdate}
        dialogTitle={"Update Downtime Code"}
        additionalProps = {{primaryText: props.primaryText, parentId: props.parentId}}
      >
        <UpdateForm />
      </ModalsContainer>

      <ModalsContainer
        id={props.id}
        action={"delete"}
        actions={[<DeleteSubmitButton />]}
        actionButton={<ActionDeleteButton />}
        modalKey={shortid.generate()}
        onSubmit={props.handleDelete}
        tooltip={"Delete Code"}
        dialogTitle={"Delete Downtime Code"}
        icon={<ActionDelete style={styles.actions} className="codes--icon" />}>
        <DeleteForm />
      </ModalsContainer>

      <ModalsContainer
        id={props.id}
        action={"add"}
        actions={[<AddSubmitButton />]}
        actionButton={<ActionAddButton />}
        modalKey={shortid.generate()}
        onSubmit={props.handleAdd}
        tooltip={"Add Code"}
        dialogTitle={"Add Downtime Code"}
        icon={<ContentAddCircle style={styles.actions} className="codes--icon" />}>
        <AddForm initialValues={{id: props.id}}/>
      </ModalsContainer>
    </div>
  );
}

export default Actions;