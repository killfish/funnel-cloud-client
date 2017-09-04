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
          <Row>
            <Col xs={12} md={12}>
              <Paper zDepth={1} rounded={false}>
              <Navigation />
              <DownTimeCodesContainer isList={true} />
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
