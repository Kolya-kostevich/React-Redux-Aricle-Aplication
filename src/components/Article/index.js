
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ToggleOpen from '../../decorators/toggleOpen';
import {connect} from 'react-redux';
import {deleteArticle} from '../../AC/index';




import CommentList from '../CommentList';



 class Article extends Component {

	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}	

	state = {
		updateIndex: 0
	}

	constructor(props) {

		super(props)

	}

	componentWillMount() {
		debugger;
	}
	componentDidMount() {
		debugger;
	}

	render() {

		const {article, isOpen, toggleOpen} = this.props

		return (

			<div>

				<h3>{article.title}</h3>

				<button onClick={toggleOpen}>

					{isOpen ? 'close' : 'open'}

				</button>

				<button onClick = {this.handleDelete}>Delete me</button>

					{this.getBody()}
			

			</div>

		)

	}

	getBody() {

		const {article, isOpen} = this.props;
		if (!isOpen) return null

		return <section>

			{article.text}
	
			<br />

			<button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>updateIndex</button>

			<br />

			<CommentList comments={article.comments}  key = {this.state.updateIndex}/>

		</section>

	}

	handleDelete = () => {
		const {deleteArticle, article} = this.props;
		deleteArticle(article.id);
	};

}

export default connect(null, {deleteArticle})(Article);