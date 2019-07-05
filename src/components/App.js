import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import CommentForm from './CommentForm/index';
import Filters from '../Filters/index';
import Counter from './Counter';
import {connect} from 'react-redux';
import articles from '../reducer/articles';


class App extends Component {

    state = {
        selection: null
    }

    render() {

        const {articles} = this.props;

        return (
            <div>
                <Counter />
                <Filters articles = {articles} />
                <ArticleList />;
            </div>
        );
    }

    changeSelection = selection => this.setState({ selection });
}

export default connect(articles)(App);