'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./TitleBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleBar = function (_Component) {
    _inherits(TitleBar, _Component);

    function TitleBar() {
        var _temp, _this, _ret;

        _classCallCheck(this, TitleBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            e.stopPropagation();
        }, _this.render = function () {
            var title = void 0;
            if (_this.props.link) {
                title = _react2.default.createElement(
                    'a',
                    { className: 'wmp-title light-grey-to-white', href: _this.props.link, target: '_blank', rel: 'noopener noreferrer' },
                    _this.props.title
                );
            } else {
                title = _react2.default.createElement(
                    'span',
                    { className: 'wmp-title light-grey-to-white' },
                    _this.props.title
                );
            }
            /*
            <div class="salefi-player-title-container">
                <a class="salefi-player-title light-grey-to-white" href="#" target="_blank">Product name - Store name</a>
                <div class="salefi-player-top-shading"></div>
                </div>
            */
            return _react2.default.createElement(
                'div',
                { className: 'wmp-title-container', onClick: _this.handleClick },
                title,
                _react2.default.createElement('div', { className: 'wmp-top-shading' })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return TitleBar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        title: state.title,
        link: state.link
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TitleBar);
module.exports = exports['default'];