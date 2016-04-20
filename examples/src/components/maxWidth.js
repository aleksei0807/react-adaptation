import React, { Component } from 'react';
import ReactAdaptation from '../../../lib/index';

class MaxWidthExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"} style={{color: 'green'}}>
				<div>Lorem ipsum dolor.</div>
				<div>Lorem ipsum dolor.</div>
			</div>
		);
	}
}

export default ReactAdaptation(MaxWidthExampleComponent, {maxWidth: 768});
