'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./Button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nextLogo = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', className: 'next-logo' },
  _react2.default.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' }),
  _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var NextButton = function (_Component) {
  _inherits(NextButton, _Component);

  function NextButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, NextButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.dispatch({ type: 'ASK_NEXT_IMAGE' });
      _this.props.dispatch({ type: 'USER_ACTIVE' });
    }, _this.render = function () {
      return _react2.default.createElement(
        'div',
        { onClick: _this.handleClick, className: 'wmp-tool-button logo-padding-small' },
        nextLogo
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return NextButton;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(NextButton);
module.exports = exports['default'];