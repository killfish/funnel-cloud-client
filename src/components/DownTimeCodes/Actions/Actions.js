import React from "react";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";
import CodeDialog from "components/DownTimeCodes/Dialog";
import UpdateForm from "components/DownTimeCodes/Forms/Update";
import ActionUpdate from "material-ui/svg-icons/action/update";
import "./Actions.css";

const styles = {
  actions: {
    height: 20,
    width: 20,
    margin: '0 -2px',
    color: '#aaa',
  }
}

const Actions = (props) => {
  return (
    <div className="codes--actions">
      <CodeDialog
        id={props.id}
        action={"update"}
        onClick={props.handleUpdate}
        tooltip={"Update Code"}
        dialogTitle={"Update Code"}
        icon={<ActionUpdate style={styles.actions} className="codes--icon" />}>
        <p>The actions in this window were passed in as an array of React objects.</p>
        <UpdateForm />
      </CodeDialog>

      <CodeDialog
        id={props.id}
        action={"delete"}
        onClick={props.handleDelete}
        tooltip={"Delete Code"}
        dialogTitle={"Delete Code"}
        icon={<ActionDelete style={styles.actions} className="codes--icon" />}>
        <p>Confirm deletion of Downtime Code?</p>
      </CodeDialog>

      <CodeDialog
        id={props.id}
        action={"add"}
        onClick={props.handleAdd}
        tooltip={"Add Code"}
        dialogTitle={"Add Code"}
        icon={<ContentAddCircle style={styles.actions} className="codes--icon" />}>
        <UpdateForm />
      </CodeDialog>
    </div>
  );
};

export default Actions;