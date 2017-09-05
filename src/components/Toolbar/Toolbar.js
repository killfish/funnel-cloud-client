import React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { ModalsContainer } from "containers/DownTimeCodes";
import AddForm from "components/DownTimeCodes/Forms/Add/Form";
import AddSubmitButton from "components/DownTimeCodes/Forms/Add/SubmitButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import shortid from 'shortid';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";

const style = {
  addTitle: {
    fontSize: '15px',
    marginRight: -15,
  },
  floatingActionButton: {
    margin: '0 0 0 22px'
  }
};

const ActionAddButton = (props) => (
  <FloatingActionButton
    style={style.floatingActionButton}
    onClick={props.handleClick}
    mini={true}
  >
    <ContentAdd  className="codes--icon"/>
  </FloatingActionButton>
);

const DTToolbar = (props) => {
  return (
    <div>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Downtime Codes" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Add Code" style={style.addTitle}/>
          <ToolbarSeparator />
          <ModalsContainer
            id={null}
            action={"add"}
            actions={[<AddSubmitButton />]}
            actionButton={<ActionAddButton />}
            modalKey={shortid.generate()}
            onSubmit={props.handleAdd}
            dialogTitle={"Add Downtime Code"}
          >
            <AddForm initialValues={{id: null}}/>
          </ModalsContainer>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default DTToolbar;