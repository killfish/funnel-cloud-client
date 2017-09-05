import React from "react";

/**
 * @param children
 * @param props
 * @returns {*}
 */
const cloneChildrenWithProps = (children, props) => {
  return React.Children.map(children, (child) => React.cloneElement(child, props));
};

export default cloneChildrenWithProps;