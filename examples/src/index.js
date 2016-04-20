import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DefaultExampleComponent from './components/default';
import FloatExampleComponent from './components/float';
import CustomComponentsComponent from './components/customComponents';
import MaxWidthExampleComponent from './components/maxWidth';
import ContainerMaxWidthExampleComponent from './components/containerMaxWidth';

ReactDOM.render(
	<div>
		<DefaultExampleComponent />
		<FloatExampleComponent />
		<div style={{clear: 'both'}} />
		<CustomComponentsComponent />
		<MaxWidthExampleComponent />
		<ContainerMaxWidthExampleComponent />
	</div>,
	document.getElementById('root')
);
