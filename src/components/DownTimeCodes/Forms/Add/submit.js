import {
  addDTCode
} from 'containers/DownTimeCodes/actions/downtimeCodes';

function submit(values, dispatch) {
  dispatch(addDTCode(Object.assign({}, {id: Math.random(), primaryText: values.primaryText, parentId: values.id })));
}

export default submit;