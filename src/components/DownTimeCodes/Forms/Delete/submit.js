import {
  deleteDTCode
} from 'containers/DownTimeCodes/actions/downtimeCodes';

function submit(values, dispatch) {
  dispatch(deleteDTCode(values.id));
}

export default submit;