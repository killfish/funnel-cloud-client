import React from "react";
import { List, ListItem } from "material-ui/List";

const style = {
  borderBottom: '1px solid #eee',
};

const nestedListStyle = {
  padding: 0,
};

const mapStructure = (nodes, onClickHandler, arrowSelector) => {
  if (nodes) {
    return nodes.map(node => (
      <ListItem
        key={node.id}
        primaryText={node.primaryText}
        initiallyOpen={node.initiallyOpen}
        primaryTogglesNestedList={true}
        leftIcon={arrowSelector(node)}
        style={style}
        nestedListStyle={nestedListStyle}
        onClick={onClickHandler}
        data-key={node.id}
        nestedItems={mapStructure(node.children, onClickHandler, arrowSelector)}
      />
    ));
  }
};

const DownTimeCodesList = (props) => {
  return (
    <List style={nestedListStyle}>
      {mapStructure(props.RootObject, props.onClickHandler, props.arrowSelector)}
    </List>
  );
};

export default DownTimeCodesList;