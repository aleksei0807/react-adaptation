import React, { Component } from 'react';
import ReactAdaptation from '../../../lib/index';

class CustomComponentsComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"} style={{color: 'blue'}}>
				<div style={{display: 'block'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div ref={ra.component}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div ref={ra.component}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		);
	}
}

export default ReactAdaptation(CustomComponentsComponent);
