import React from "react";
import ActionDelete from "material-ui/svg-icons/action/delete";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";
import { ModalsContainer } from "containers/DownTimeCodes";
import showResults from 'components/DownTimeCodes/Forms/Update/submit';
import UpdateForm from "components/DownTimeCodes/Forms/Update/Form";
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
        onClick={props.handleUpdate}
        tooltip={"Update Code"}
        dialogTitle={"Update Code"}
        icon={<ActionUpdate style={styles.actions} className="codes--icon" />}>
        <p>The actions in this window were passed in as an array of React objects.</p>
        <UpdateForm onSubmit={showResults} />
      </ModalsContainer>

      <ModalsContainer
        id={props.id}
        action={"delete"}
        modalKey={shortid.generate()}
        onClick={props.handleDelete}
        tooltip={"Delete Code"}
        dialogTitle={"Delete Code"}
        icon={<ActionDelete style={styles.actions} className="codes--icon" />}>
        <p>Confirm deletion of Downtime Code?</p>
      </ModalsContainer>

      <ModalsContainer
        id={props.id}
        action={"add"}
        modalKey={shortid.generate()}
        onClick={props.handleAdd}
        tooltip={"Add Code"}
        dialogTitle={"Add Code"}
        icon={<ContentAddCircle style={styles.actions} className="codes--icon" />}>
        <UpdateForm onSubmit={showResults} />
      </ModalsContainer>
    </div>
  );
};

export default Actions;