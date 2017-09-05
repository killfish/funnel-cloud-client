import React from "react";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";
import { ModalsContainer } from "containers/DownTimeCodes";
import UpdateForm from "components/DownTimeCodes/Forms/Update/Form";
import AddForm from "components/DownTimeCodes/Forms/Add/Form";
import ActionUpdate from "material-ui/svg-icons/action/update";
import shortid from 'shortid';
import "./Actions.css";

const styles = {
  actions: {
    height: 20,
    width: 20,
    margin: '0 -2px',
    color: '#aaa',
  }
};

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
        modalKey={shortid.generate()}
        onClick={props.handleSelect}
        onSubmit={props.handleUpdate}
        tooltip={"Update Code"}
        dialogTitle={"Update Downtime Code"}
        icon={<ActionUpdate style={styles.actions} className="codes--icon" />}>
        <UpdateForm
          initialValues={{id: props.id, primaryText: props.primaryText, parentId: props.parentId}}
        />
      </ModalsContainer>

      <ModalsContainer
        id={props.id}
        action={"delete"}
        modalKey={shortid.generate()}
        onClick={props.handleSelect}
        onSubmit={props.handleDelete}
        tooltip={"Delete Code"}
        dialogTitle={"Delete Downtime Code"}
        icon={<ActionDelete style={styles.actions} className="codes--icon" />}>
        <p>Confirm deletion of Downtime Code? <br />
          <strong>Note</strong>: All Child Codes will be removed as well.
        </p>
      </ModalsContainer>

      <ModalsContainer
        id={props.id}
        action={"add"}
        modalKey={shortid.generate()}
        onClick={props.handleSelect}
        onSubmit={props.handleAdd}
        tooltip={"Add Code"}
        dialogTitle={"Add Downtime Code"}
        icon={<ContentAddCircle style={styles.actions} className="codes--icon" />}>
        <AddForm initialValues={{id: props.id}}/>
      </ModalsContainer>
    </div>
  );
};

export default Actions;