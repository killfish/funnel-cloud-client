import React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { ModalsContainer } from "containers/DownTimeCodes";
import AddForm from "components/DownTimeCodes/Forms/Add/Form";
import ContentAddCircle from "material-ui/svg-icons/content/add-circle";
import ContentAdd from "material-ui/svg-icons/content/add";
import shortid from 'shortid';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";

const style = {
  addTitle: {
    fontSize: '15px',
    marginRight: -15,
  },
};

const DTToolbar = (props) => {

  console.log('props', props);

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
            modalKey={shortid.generate()}
            onClick={props.actions.handleSelect}
            onSubmit={props.actions.handleAdd}
            tooltip={"Add Code"}
            dialogTitle={"Add Downtime Code"}
            icon={<ContentAddCircle className="codes--icon" />}>
            <AddForm initialValues={{id: null}}/>
          </ModalsContainer>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default DTToolbar;