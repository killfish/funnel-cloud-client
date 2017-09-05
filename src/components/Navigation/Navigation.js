import React from "react";
import AppBar from "material-ui/AppBar";
import DTToolbar from "components/Toolbar";
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
      title={<div><img src={logo} className="fc-logo"/> <span>Funnel Cloud</span></div>}
    />
    <DTToolbar />
  </div>
);

export default Navigation;