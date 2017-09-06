import {
  addDTCode
} from 'containers/DownTimeCodes/actions/downtimeCodes';

function submit(values, dispatch) {
  dispatch(addDTCode(Object.assign({}, {primaryText: values.primaryText, parentId: values.id })));
}

export default submit;