import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import { makeFilter } from '../selectors/index';
import LinksComponent from '../components/LinksComponent';

const mapStateToProps = (state, ownProps) => ({
    active: makeFilter(state, ownProps)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter, ownProps.listId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinksComponent)