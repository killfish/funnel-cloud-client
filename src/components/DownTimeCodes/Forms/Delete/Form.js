import React from "react";
import submit from "components/DownTimeCodes/Forms/Delete/submit";
import { reduxForm } from "redux-form";

const CodeDelete = props => {
  console.log('props form', props);
  const { handleSubmit } = props;
  return (
    <div>
      <p>Confirm deletion of Downtime Code? <br />
        <strong>Note</strong>: All Child Codes will be removed as well.
      </p>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export const config = {
  form: 'deleteCode',
  onSubmit: submit
}

export default reduxForm(config)(CodeDelete);