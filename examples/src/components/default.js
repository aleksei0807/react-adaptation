import React, { Component } from 'react';
import ReactAdaptation from '../../../lib/index';

class DefaultExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"}>
				<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		);
	}
}

export default ReactAdaptation(DefaultExampleComponent);
