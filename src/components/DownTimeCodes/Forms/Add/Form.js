/** TODO: Consolidate Add and Update Form into one Components **/

import React from "react";
import submit from 'components/DownTimeCodes/Forms/Add/submit';
import { Field, reduxForm } from 'redux-form';
import {
  TextField
} from 'redux-form-material-ui'
import { DownTimeCodesContainer } from "containers/DownTimeCodes";

const CodeAdd = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="primaryText"
        component={TextField}
        hintText="Enter Downtime Code"
        floatingLabelText="Downtime Code Text"
        fullWidth={true}
      />
      <p>Select Parent: </p>
      <DownTimeCodesContainer isList={false}/>
    </form>
  );
}

export const config = {
  form: 'addCode',
  onSubmit: submit
}

export default reduxForm(config)(CodeAdd);