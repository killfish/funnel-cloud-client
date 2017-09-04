import React from "react";
import buildTree from 'util/code-tree';
import CircularProgress from "material-ui/CircularProgress";
import { List, ListItem } from "material-ui/List";
import Actions from "components/DownTimeCodes/Actions";
import Checkbox from 'material-ui/Checkbox';
import { grey300, pink500 } from "material-ui/styles/colors";
import Badge from "material-ui/Badge";

const style = {
  listItem: {
    borderBottom: '1px solid #eee',
  },
  nestedList: {
    padding: 0,
  },
  loader: {
    marginTop: 50,
    marginBottom: 60,
    marginLeft: '50%',
    left:-50,
    textAlign: 'center'
  }
};

/**
 * @param node
 * @returns {{top: number, right: number, backgroundColor: string, color: string}}
 */
const configStyles = (node) => {
  return { top: 0, right: 30, backgroundColor: node.children.length > 0 ? pink500 : grey300, color: '#fff' };
};

/**
 * @param node
 * @returns {XML}
 */
const configBadges = (node) => {
  return <Badge badgeStyle={configStyles(node)} badgeContent={node.children.length}/>;
};

/**
 * @param nodes
 * @param isList
 * @returns {*|Object|Array}
 */
const mapStructure = (nodes, actions, isList) => {
  if (nodes) {
    return nodes.map(node => (
      <ListItem
        className={"codes"}
        key={node.id}
        primaryText={node.primaryText}
        initiallyOpen={isList ? false : true}
        primaryTogglesNestedList={true}
        leftIcon={isList ? configBadges(node) : <Checkbox onClick={(e) => { e.stopPropagation();} } />}
        style={style.listItem}
        nestedListStyle={style.nestedList}
        data-key={node.id}
        nestedItems={mapStructure(node.children, actions, isList)}
      >
        {isList &&
           <Actions
              id={node.id}
              {...actions}
            />
        }
      </ListItem>
    ));
  }
};

/**
 * @param props
 * @returns {XML}
 * @constructor
 */
const DownTimeCodesList = (props) => {
  return (
    <div>
      { props.isFetching
        ? <CircularProgress style={style.loader}/>
        : <List style={style.nestedList}>
        {mapStructure(buildTree(props.codes), {...props.actions}, props.isList)}
      </List>
      }
    </div>
  );
};

export default DownTimeCodesList;