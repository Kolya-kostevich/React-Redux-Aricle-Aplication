import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import Select from 'react-select';
import 'react-select/dist/react-select.css'
import CommentForm from './CommentForm/index';
import Filters from '../Filters/index';
import Counter from './Counter';

class App extends Component {

    state = {
        selection: null
    }

    render() {

        return (
            <div>
                <Counter />
                <Filters articles = {[]} />
                <ArticleList />;
            </div>
        );
    }

    changeSelection = selection => this.setState({ selection });
}

export default App;