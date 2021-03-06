import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmActionCreators from '../actions';
import Film from '../views/Film';
import userSelectors from '../../../../Auth/selectors';
import Reactotron from 'reactotron-react-native';
import { navigate } from '../../../../../services/navigationService';
import filmSelectors from '../selectors';

class FilmContainer extends Component {

    constructor(props) {
        super(props);
        this.openComments = this.openComments.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    handleCommentSubmit({ message }) {
        const { film, user, actions: { updateFilmRequest } } = this.props;
        let comment = {
            user: user._id,
            message,
            createdAt: new Date()
        };
        const resFilm = JSON.parse(JSON.stringify(film));
        resFilm.comments.push(comment);
        updateFilmRequest({ film: resFilm });
    }

    onRefresh(isComments) {
        const { film } = this.props;
        const { actions: { startRefreshing, getFilmRequest, startRefreshingComments } } = this.props;
        if (isComments) {
            startRefreshingComments();
        } else {
            startRefreshing();
        }
        getFilmRequest({ id: film._id });
    }

    openComments() {
        const { film } = this.props;
        navigate('Comments', {
            id: film._id,
            comments: film.comments,
            handleCommentSubmit: this.handleCommentSubmit
        });
    }

    render() {
        const { film, loading, isRefreshing, isRefreshingComments } = this.props;
        const props = {
            film,
            loading,
            openComments: this.openComments,
            isRefreshing,
            onRefresh: this.onRefresh,
            isRefreshingComments,
        };

        return (
            <Film {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state),
        isRefreshing: filmSelectors.isRefreshing(state),
        isRefreshingComments: filmSelectors.isRefreshingComments(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch),
    };
}

FilmContainer.propTypes = {
    film: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    actions: PropTypes.object.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    isRefreshingComments: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);