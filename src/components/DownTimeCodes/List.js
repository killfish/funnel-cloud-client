import React from "react";
import CircularProgress from "material-ui/CircularProgress";
import { List, ListItem } from "material-ui/List";

const style = {
  listItem: {
    borderBottom: '1px solid #eee',
  },
  nestedList: {
    padding: 0,
  },
  loader: {
    margin: 25,
    textAlign: 'center'
  }
};

const mapStructure = (nodes, onClickHandler, configBadges) => {
  if (nodes) {
    return nodes.map(node => (
      <ListItem
        key={node.id}
        primaryText={node.primaryText}
        initiallyOpen={node.initiallyOpen}
        primaryTogglesNestedList={true}
        leftIcon={configBadges(node)}
        style={style.listItem}
        nestedListStyle={style.nestedList}
        onClick={onClickHandler}
        data-key={node.id}
        nestedItems={mapStructure(node.children, onClickHandler, configBadges)}
      />
    ));
  }
};


const DownTimeCodesList = (props) => {
  return (
    <div> 
      { props.state.isLoading
        ? <CircularProgress style={style.loader} />
        : <List style={style.nestedList}>
        {mapStructure(props.state.RootObject, props.onClickHandler, props.configBadges)}
      </List>
      }
    </div>
  );
};

export default DownTimeCodesList;