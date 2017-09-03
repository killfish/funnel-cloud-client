import React from "react";
import AppBar from "material-ui/AppBar";
import DTToolbar from "components/Toolbar";

const Navigation = () => (
  <div>
    <AppBar
      showMenuIconButton={false}
      title={<span>Funnel Cloud</span>}
    />
    <DTToolbar />
  </div>
);

export default Navigation;