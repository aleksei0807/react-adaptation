'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAdaptation = function ReactAdaptation(AdaptationComponent, params) {
	return function (_Component) {
		_inherits(_class, _Component);

		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

			_this.state = {
				shouldAdaptate: false,
				innerComponentsWidth: 0
			};
			_this.addComp = _this.addComp.bind(_this);
			_this.addContainer = _this.addContainer.bind(_this);
			_this.resizeListener = _this.resizeListener.bind(_this);
			_this.innerComponents = [];
			_this.container = null;
			return _this;
		}

		_createClass(_class, [{
			key: 'adaptation',
			value: function adaptation(innerComponentsWidth) {
				if (this.container) {
					var adaptationComponentWidth = this.container.clientWidth;
					var newVal = void 0,
					    documentWidth = void 0,
					    maxWidth = void 0;
					var containerMaxWidth = params ? params.containerMaxWidth || 0 : 0;
					if (params && params.maxWidth) {
						documentWidth = document.documentElement.clientWidth;
						maxWidth = params.maxWidth;
					}
					if (maxWidth !== undefined && documentWidth <= maxWidth || adaptationComponentWidth <= containerMaxWidth || adaptationComponentWidth <= innerComponentsWidth) {
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
			}
		}, {
			key: 'addComp',
			value: function addComp(c) {
				this.innerComponents.push(c);
			}
		}, {
			key: 'addContainer',
			value: function addContainer(c) {
				this.container = c;
			}
		}, {
			key: 'resizeListener',
			value: function resizeListener(e) {
				this.adaptation(this.state.innerComponentsWidth);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var innerComponentsWidth = 0;
				var calculateWidth = function calculateWidth(c) {
					var styles = getComputedStyle(c);
					var margin = styles.margin ? parseInt(styles.margin.replace(/(^\d*)/, '$1')) : 0;
					var marginLeft = styles.marginLeft ? parseInt(styles.marginLeft.replace(/(^\d*)/, '$1')) : 0;
					var marginRight = styles.marginRight ? parseInt(styles.marginRight.replace(/(^\d*)/, '$1')) : 0;
					var margins = margin + marginLeft + marginRight;
					innerComponentsWidth = innerComponentsWidth + c.clientWidth + margins;
				};

				if (this.innerComponents.length > 0) {
					this.innerComponents.map(calculateWidth);
				} else if (this.container) {
					[].map.call(this.container.children, calculateWidth);
				}

				this.setState({
					innerComponentsWidth: innerComponentsWidth
				});

				this.adaptation(innerComponentsWidth);

				window.addEventListener('resize', this.resizeListener);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				window.removeEventListener('resize', this.resizeListener);
			}
		}, {
			key: 'render',
			value: function render() {
				var component = this.addComp;
				var container = this.addContainer;
				var ra = _extends({ component: component, container: container }, this.state);
				return _react2.default.createElement(AdaptationComponent, _extends({ ref: 'adaptationComponent' }, this.props, { ra: ra }));
			}
		}]);

		return _class;
	}(_react.Component);
};

exports.default = ReactAdaptation;