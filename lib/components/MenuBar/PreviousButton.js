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

var previousLogo = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', className: 'previous-logo' },
  _react2.default.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M6 6h2v12H6zm3.5 6l8.5 6V6z' }),
  _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var PreviousButton = function (_Component) {
  _inherits(PreviousButton, _Component);

  function PreviousButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, PreviousButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.dispatch({ type: 'ASK_PREVIOUS_IMAGE' });
      _this.props.dispatch({ type: 'USER_ACTIVE' });
    }, _this.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'wmp-tool-button logo-padding-small', onClick: _this.handleClick },
        previousLogo
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PreviousButton;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PreviousButton);
module.exports = exports['default'];