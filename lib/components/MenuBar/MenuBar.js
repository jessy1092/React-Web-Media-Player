'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./MenuBar.css');

var _PlayButton = require('./PlayButton');

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _NextButton = require('./NextButton');

var _NextButton2 = _interopRequireDefault(_NextButton);

var _PreviousButton = require('./PreviousButton');

var _PreviousButton2 = _interopRequireDefault(_PreviousButton);

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _FullscreenButton = require('./FullscreenButton');

var _FullscreenButton2 = _interopRequireDefault(_FullscreenButton);

var _VolumeControl = require('./VolumeControl');

var _VolumeControl2 = _interopRequireDefault(_VolumeControl);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _LogoButton = require('./LogoButton');

var _LogoButton2 = _interopRequireDefault(_LogoButton);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuBar = function (_Component) {
    _inherits(MenuBar, _Component);

    function MenuBar() {
        var _temp, _this, _ret;

        _classCallCheck(this, MenuBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (e) {
            e.stopPropagation();
        }, _this.render = function () {
            var volumeControl = void 0,
                previousButton = void 0,
                nextButton = void 0,
                logo = void 0,
                fullscreenButton = void 0;
            var buttons = [];
            if (_this.props.hasVideo || _this.props.hasAudio) volumeControl = _react2.default.createElement(_VolumeControl2.default, null);else {
                previousButton = _react2.default.createElement(_PreviousButton2.default, null);
                nextButton = _react2.default.createElement(_NextButton2.default, null);
            }
            if (_this.props.logo) {
                logo = _react2.default.createElement(_LogoButton2.default, { img: _this.props.logo.img, href: _this.props.logo.href });
            }
            if (_this.props.buttons) {
                for (var i = 0; i < _this.props.buttons.length; ++i) {
                    buttons.push(_react2.default.createElement(_Button2.default, { img: _this.props.buttons[i].img, key: i, href: _this.props.buttons[i].href, style: _this.props.buttons[i].style, callback: _this.props.buttons[i].callback }));
                }
            }
            if (_this.props.allowFullFrame) {
                fullscreenButton = _react2.default.createElement(_FullscreenButton2.default, null);
            }
            return _react2.default.createElement(
                'div',
                { className: 'wmp-menu-bar-container' },
                _react2.default.createElement('div', { className: 'wmp-bottom-shading' }),
                _react2.default.createElement('div', { className: 'wmp-menu-bar-offset-left' }),
                _react2.default.createElement('div', { className: 'wmp-menu-bar-offset-right' }),
                _react2.default.createElement(
                    'div',
                    { className: 'wmp-menu-bar', onClick: _this.handleClick },
                    _react2.default.createElement(
                        'div',
                        { className: 'wmp-tool-constainer' },
                        _react2.default.createElement(
                            'div',
                            { className: 'wmp-tool-constainer-left' },
                            _react2.default.createElement(_PlayButton2.default, null),
                            volumeControl,
                            previousButton,
                            nextButton,
                            _react2.default.createElement(_Timer2.default, null)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'wmp-tool-constainer-right' },
                            buttons,
                            logo,
                            fullscreenButton
                        )
                    )
                ),
                _react2.default.createElement(_ProgressBar2.default, null)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return MenuBar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        hasVideo: state.hasVideo,
        hasAudio: state.hasAudio,
        hasSlideshow: state.hasSlideshow,
        allowMouseLeaveVolumeSlider: state.allowMouseLeaveVolumeSlider,
        logo: state.logo,
        buttons: state.buttons,
        allowFullFrame: state.allowFullFrame
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MenuBar);
module.exports = exports['default'];