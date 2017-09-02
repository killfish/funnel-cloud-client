import React, { Component } from "react";
import DownTimeCodesContainer from "containers/DownTimeCodes";
import Navigation from "components/Navigation";
import Paper from "material-ui/Paper";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";


class App extends Component {
  render() {
    return (
        <Grid>
          <Paper zDepth={1} rounded={false}>
          <Row>
            <Col xs={12} md={12}>
              <Navigation />
              <DownTimeCodesContainer />
            </Col>
          </Row>
          </Paper>
        </Grid>
    );
  }
}

export default App;
