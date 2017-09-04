import React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";

const style = {
  button: {
    margin: '0 0 0 25px',
    position: ' relative',
    top: -1,
    right: -1,
  },
  addTitle: {
    fontSize: '15px',
    marginRight: -15,
  },
  toggle: {
    marginBottom: 16,
  },
}

export default class DTToolbar extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Downtime Codes" />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Add Code" style={style.addTitle}/>
            <ToolbarSeparator />
            <FloatingActionButton mini={true} style={style.button}>
              <ContentAdd />
            </FloatingActionButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}