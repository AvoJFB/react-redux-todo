import { connect } from 'react-redux';
import setVisibilityFilter from '../actions/visibilityFilterActions';
import Link from '../components/Link';


const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  null,
  mapDispatchToProps,
)(Link);

export default FilterLink;
