import React from "react";
import Badge from "material-ui/Badge";
import List from "components/DownTimeCodes";
import { grey300, pink500 } from "material-ui/styles/colors";

const configStyles = (node) => {
  return { top: 0, right: 30, backgroundColor: node.children.length > 0 ? pink500 : grey300, color: '#fff' };
}

/**
 * @param node
 * @returns {XML}
 */
const configBadges = (node) => {
  return <Badge badgeStyle={configStyles(node)} badgeContent={node.children.length}/>;
};

export default class DownTimeCodes extends React.Component {

  state = {
    RootObject: [],
    isLoading: true
  }

  componentDidMount = async() => {
    let response = await fetch('https://api.myjson.com/bins/dlsdl');
    let data = await response.json();
    setTimeout(() => {
      return this.setState({ RootObject: data, isLoading: false });
    }, 2000);
  }

  /**
   * @param event
   * @returns {*}
   */
  onClickHandler = (event) => {
    const { RootObject } = this.state;
    const id = event.currentTarget.dataset.key;
    const newRootObject = RootObject.map(a => {
      return a.id === id ? Object.assign({}, a, { open: a.open ? false : true }) : a;
    });

    return this.setState({ RootObject: newRootObject });
  }

  render() {
    return (
      <List state={this.state} onClickHandler={this.onClickHandler} configBadges={configBadges}/>
    );
  }
}