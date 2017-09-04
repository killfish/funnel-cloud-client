import React from 'react';
import TextField from 'material-ui/TextField';
import DownTimeCodesContainer from "containers/DownTimeCodes";

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Enter Downtime Code"
      floatingLabelText="Downtime Code Text"
      fullWidth={true}
    />
    <br />
    <p>Select Parent</p>
    <br />
    <DownTimeCodesContainer isList={false} />
  </div>
);

export default TextFieldExampleSimple;