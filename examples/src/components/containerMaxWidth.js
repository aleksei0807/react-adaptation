import React, { Component } from 'react';
import ReactAdaptation from '../../../lib/index';

class ContainerMaxWidthExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"} style={{padding: 20, color: '#598f11'}}>
				<div>Lorem ipsum dolor.</div>
				<div>Lorem ipsum dolor.</div>
			</div>
		);
	}
}

export default ReactAdaptation(ContainerMaxWidthExampleComponent, {containerMaxWidth: 768});
