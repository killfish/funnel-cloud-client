import React from 'react';
import List from 'components/DownTimeCodes';
import { connect } from 'react-redux';
import {
  fetchCodes,
  selectDTCode,
  deleteDTCode,
  addDTCode,
  updateDTCode
} from 'containers/DownTimeCodes/actions/downtimeCodes';

class DownTimeCodes extends React.Component {

  componentDidMount() {
    if (this.props.isList) this.props.fetchCodes();
  }

  render() {
    return (
      <List {...this.props}/>
    );
  }
}

/**
 * @param state
 * @param ownProps
 * @returns {{codes: (*|Array), isFetching: (*|boolean), activeCode: (state.activeCode|{}), isList: *}}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    codes : state.codes.payload || [],
    isFetching: state.codes.isFetching,
    isList: ownProps.isList
  }
};

/**
 * @param dispatch
 * @returns {function()}
 */
const mapDispatchToProps = dispatch => {
  return {
    fetchCodes: () => {
      dispatch(fetchCodes());
    },
    actions: {
      handleSelect: id => {
        dispatch(selectDTCode(id));
      },
      handleDelete: id => {
        dispatch(deleteDTCode(id));
      },
      handleAdd: code => {
        dispatch(addDTCode(code));
      },
      handleUpdate: code => {
        dispatch(updateDTCode(code));
      },  
    },
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DownTimeCodes);