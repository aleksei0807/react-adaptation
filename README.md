# React Adaptation

Mixin that simplify adaptation of your react components.

It perfoms checks in one of two ways:

- it checks that all first-level childs' widths together less or equals container's (`ref={ra.container}`) width.
- it checks that all components with `ref={ra.component}` widths together less or equals container's width.

Also it can perform addictive checks like `maxWidth` or `containerMaxWidth`.

- `maxWidth` parameter sets max document width when trigger is always `true`.
- `containerMaxWidth` parameter sets max container (`ref={ra.container}`) width when trigger is always `true`.

# Usage example

## Default example

```javascript
import React, { Component } from 'react';
import ReactAdaptation from 'react-adaptation';

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
```

Required styles

```css
.container > * {
	display: inline-block;
}
```

or you may use fixed width and float left:

```javascript
import React, { Component } from 'react';
import ReactAdaptation from 'react-adaptation';

class FloatExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container-float mobile" : "container-float"}>
				<div style={{float: 'left', width: 300}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div style={{float: 'left', width: 400}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		);
	}
}

export default ReactAdaptation(FloatExampleComponent);
```

## Selected components example

```javascript
import React, { Component } from 'react';
import ReactAdaptation from 'react-adaptation';

class CustomComponentsComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"}>
				<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div style={{display: 'inline-block'}} ref={ra.component}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
				<div style={{display: 'inline-block'}} ref={ra.component}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		);
	}
}

export default ReactAdaptation(CustomComponentsComponent);
```

## maxWidth example

```javascript
import React, { Component } from 'react';
import ReactAdaptation from 'react-adaptation';

class MaxWidthExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"}>
				<div>Lorem ipsum dolor.</div>
				<div>Lorem ipsum dolor.</div>
			</div>
		);
	}
}

export default ReactAdaptation(MaxWidthExampleComponent, {maxWidth: 768});
```

## containerMaxWidth example

```javascript
import React, { Component } from 'react';
import ReactAdaptation from 'react-adaptation';

class ContainerMaxWidthExampleComponent extends Component {
	render() {
		const { ra } = this.props;
		return (
			<div ref={ra.container} className={ra.shouldAdaptate ? "container mobile" : "container"} style={{padding: 20}}>
				<div>Lorem ipsum dolor.</div>
				<div>Lorem ipsum dolor.</div>
			</div>
		);
	}
}

export default ReactAdaptation(ContainerMaxWidthExampleComponent, {containerMaxWidth: 768});
```
