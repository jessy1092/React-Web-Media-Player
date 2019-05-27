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

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        var _temp, _this, _ret;

        _classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            if (_this.props.callback) _this.props.callback(e);
        }, _this.render = function () {
            if (_this.props.href !== undefined) {
                return _react2.default.createElement(
                    'div',
                    { className: 'wmp-tool-button light-grey-to-white', style: _this.props.style },
                    _react2.default.createElement(
                        'a',
                        { href: _this.props.href },
                        _react2.default.createElement('img', { src: _this.props.img, alt: '' })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'wmp-tool-button light-grey-to-white', style: _this.props.style, onClick: _this.handleClick },
                    _react2.default.createElement('img', { src: _this.props.img, alt: '' })
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Button;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Button);
module.exports = exports['default'];