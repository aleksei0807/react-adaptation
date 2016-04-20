import React, { Component } from 'react';
import ReactAdaptation from '../../../lib/index';

class FloatExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container-float mobile" : "container-float"} style={{color: 'red'}}>
				<div style={{float: 'left', width: 300}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div style={{float: 'left', width: 400}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		);
	}
}

export default ReactAdaptation(FloatExampleComponent);
