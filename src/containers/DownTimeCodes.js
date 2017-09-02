import React from "react";
import HardWareKeyboardArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";
import HardWareKeyboardArrowDown from "material-ui/svg-icons/hardware/keyboard-arrow-down";
import List from "components/DownTimeCodes";

/**
 * @param node
 * @returns {boolean}
 */
const hasChildren = (node) => {
  return node.children.length >= 1;
};

/**
 * @param node
 * @returns {XML}
 */
const arrowSelector = (node) => {
  return hasChildren(node) ? node.initiallyOpen ? <HardWareKeyboardArrowDown /> : <HardWareKeyboardArrowRight /> : <span />;
};

export default class DownTimeCodes extends React.Component {

  state = {
    RootObject: []
  }

  componentDidMount = async () => {
    let response = await fetch('https://api.myjson.com/bins/tqf5l');
    let data = await response.json();
    return this.setState({RootObject: data});
  }

  arrowSelector = arrowSelector

  /**
   * @param event
   */
  onClickHandler = (event) => {
    const { RootObject } = this.state;
    const id = event.currentTarget.dataset.key;
    const newRootObject = RootObject.map(a => {
      return a.id === id ? Object.assign({}, a, { open: a.open ? false : true }) : a;
    });

    this.setState({ RootObject: newRootObject });
  }

  render() {
    return (
      <List RootObject={this.state.RootObject} onClickHandler={this.onClickHandler} arrowSelector={this.arrowSelector}/>
    );
  }
}