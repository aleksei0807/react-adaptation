import React, { Component } from 'react';

var ReactAdaptation = (AdaptationComponent, params) => class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldAdaptate: false,
			innerComponentsWidth: 0
		};
		this.addComp = this.addComp.bind(this);
		this.addContainer = this.addContainer.bind(this);
		this.innerComponents = [];
		this.container = null;
	}

	adaptation(innerComponentsWidth) {

		let adaptationComponentWidth = this.container.clientWidth;
		let newVal, documentWidth, maxWidth;
		let containerMaxWidth = params ? (params.containerMaxWidth || 0) : 0;
		if (params && params.maxWidth) {
			documentWidth = document.documentElement.clientWidth;
			maxWidth = params.maxWidth;
		}
		if ((maxWidth !== undefined && documentWidth <= maxWidth) || (adaptationComponentWidth <= containerMaxWidth) || (adaptationComponentWidth <= innerComponentsWidth)) {
			newVal = true;
		} else {
			newVal = false;
		}
		if (this.state.shouldAdaptate !== newVal) {
			this.setState({
				shouldAdaptate: newVal
			});
		}
	}


	addComp(c){
		this.innerComponents.push(c);
	}

	addContainer(c) {
		this.container = c;
	}

	componentDidMount() {
		let innerComponentsWidth = 0;
		let calculateWidth = c => {
			let styles = getComputedStyle(c);
			let margin = styles.margin ? parseInt(styles.margin.replace(/(^\d*)/, '$1')) : 0;
			let marginLeft = styles.marginLeft ? parseInt(styles.marginLeft.replace(/(^\d*)/, '$1')) : 0;
			let marginRight =  styles.marginRight ? parseInt(styles.marginRight.replace(/(^\d*)/, '$1')) : 0;
			let margins =  margin + marginLeft + marginRight;
			innerComponentsWidth = innerComponentsWidth + c.clientWidth + margins;
		};

		if (this.innerComponents.length > 0) {
			this.innerComponents.map(calculateWidth);
		} else {
			[].map.call(this.container.children, calculateWidth);
		}

		this.setState({
			innerComponentsWidth
		});

		this.adaptation(innerComponentsWidth);

		window.addEventListener('resize', (e) => {
			this.adaptation(this.state.innerComponentsWidth);
		});
	}

	render() {
		let component = this.addComp;
		let container = this.addContainer;
		let ra = {component, container, ...this.state};
		return <AdaptationComponent ref="adaptationComponent" {...this.props} {...{ra: ra}} />;
	}

};

export default ReactAdaptation;
