import React from "react";
import submit from 'components/DownTimeCodes/Forms/Update/submit';
import { Field, reduxForm } from 'redux-form';
import {
  TextField
} from 'redux-form-material-ui'
import { DownTimeCodesContainer } from "containers/DownTimeCodes";

const CodeUpdate = props => {
  const { error, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="primaryText"
        component={TextField}
        hintText="Enter Downtime Code"
        floatingLabelText="Downtime Code Text"
        fullWidth={true}
      />
      <br />
      <p>Select Parent</p>
      <br />
      <DownTimeCodesContainer isList={false}/>
      {error && <strong>{error}</strong>}
    </form>
  );
}

export const config = {
  form: 'updateCode',
  onSubmit: submit
}

export default reduxForm(config)(CodeUpdate);