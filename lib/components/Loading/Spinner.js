'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./Spinner.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner() {
        var _temp, _this, _ret;

        _classCallCheck(this, Spinner);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.render = function () {
            return _react2.default.createElement(
                'div',
                { className: 'wmp-spinner', hidden: !_this.props.isLoading },
                _react2.default.createElement(
                    'div',
                    { className: 'wmp-spinner-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wmp-spinner-rotator' },
                        _react2.default.createElement(
                            'div',
                            { className: 'wmp-spinner-left' },
                            _react2.default.createElement('div', { className: 'wmp-spinner-circle' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'wmp-spinner-right' },
                            _react2.default.createElement('div', { className: 'wmp-spinner-circle' })
                        )
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Spinner;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Spinner);
module.exports = exports['default'];