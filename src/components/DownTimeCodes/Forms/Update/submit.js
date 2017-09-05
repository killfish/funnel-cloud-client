import timeout from 'util/timeout';
import {
  updateDTCode
} from 'containers/DownTimeCodes/actions/downtimeCodes';

function submit(values, dispatch) {
  return timeout(100).then(() => {
    dispatch(updateDTCode(Object.assign({}, {id: 1}, values)));
  })
}

export default submit;