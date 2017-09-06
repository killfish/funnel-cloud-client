import React from "react";
import AppBar from "material-ui/AppBar";
import logo from "assets/images/funnel_cloud@2x.png";
import "./Navigation.css";

const styles = {
  titleStyle: {
    paddingLeft: 63,
    overflow: 'hidden'
  }
};

const Navigation = () => (
  <div>
    <AppBar
      titleStyle={styles.titleStyle}
      showMenuIconButton={false}
      title={<div><img src={logo} className="fc-logo" alt="Funnel Cloud Logo"/><span className="raleway-bold">Shopfloor</span></div>}
    />
  </div>
);

export default Navigation;