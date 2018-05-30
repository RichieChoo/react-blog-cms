import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewComponent from './view';
import * as actions from './actions';

const mapStateToProps = (state) => {
    const { fetchData} = state.about.toJS();
    return { fetchData};
};

const mapDispatchToProps = dispatch => ({
    fetchAction:() => {
        dispatch(actions.fetchAction())
    }
});

class Container extends Component {
    render() {
        return (
            <ViewComponent {...this.props}/>
        )
    }
}

Container.propTypes = {
    fetchAction:PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Container);