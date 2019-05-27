'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./LargePlayButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var playLogo = _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '40', height: '40', viewBox: '0 0 24 24' },
    _react2.default.createElement('path', { fill: 'white', d: 'M8 5v14l11-7z' }),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var LargePlayButton = function (_Component) {
    _inherits(LargePlayButton, _Component);

    function LargePlayButton() {
        var _temp, _this, _ret;

        _classCallCheck(this, LargePlayButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.render = function () {
            var style = void 0;
            if (_this.props.isPlayerHighlighted) {
                style = {
                    backgroundColor: _this.props.color,
                    opacity: 1
                };
            }

            return _react2.default.createElement(
                'div',
                { className: 'wmp-large-play-button ', style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'wmp-central-play-arrow material-icons md-40' },
                    playLogo
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return LargePlayButton;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isPlayerHighlighted: state.isPlayerHighlighted,
        color: state.color
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(LargePlayButton);
module.exports = exports['default'];