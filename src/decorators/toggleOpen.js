import React, {Component as ReactComponents} from 'react';

export default (OriginalComponent) => class WrapperComponent extends ReactComponents {
    state = {
        isOpen: false
    };

    componentDidMount() {
        console.log('toggle accordion has been mounted');
    };

    componentDidUpdate() {
        console.log('toggle accordion has been updated');
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    };

    toggleOpen = (ev) => {

		ev && ev.preventDefault && ev.preventDefault();

		console.log('---', ev.nativeEvent)

		this.setState({
			isOpen: !this.state.isOpen
		})

	};
}