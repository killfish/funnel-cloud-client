import {
  updateDTCode
} from 'containers/DownTimeCodes/actions/downtimeCodes';

function submit(values, dispatch) {
  dispatch(updateDTCode(Object.assign({}, values)));
}

export default submit;