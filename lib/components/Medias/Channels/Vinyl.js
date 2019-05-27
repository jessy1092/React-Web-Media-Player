'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vinyl = function (_Component) {
    _inherits(Vinyl, _Component);

    function Vinyl(props) {
        _classCallCheck(this, Vinyl);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.load = function () {
            _this.vinyl = new Image();
            _this.vinyl.onload = function (e) {
                _this.props.dispatch({ type: 'VINYL_IS_READY' });
            };
            _this.vinyl.src = _this.props.vinyl;
        };

        _this.adaptImageToWidth = function (width, height) {
            var imgWidth = _this.vinyl.width;
            var imgHeight = _this.vinyl.height;
            var margin = (height - imgHeight / imgWidth * width) / 2;
            return {
                marginTop: margin + "px",
                width: "100%",
                height: imgHeight / imgWidth * width + "px"
            };
        };

        _this.adaptImageToHeight = function (width, height) {
            var imgWidth = _this.vinyl.width;
            var imgHeight = _this.vinyl.height;
            var margin = (width - imgWidth / imgHeight * height) / 2;
            return {
                marginLeft: margin + "px",
                height: "100%",
                width: imgWidth / imgHeight * height + "px"
            };
        };

        _this.render = function () {
            if (!_this.props.isVinylReady) return '';
            var width = void 0,
                height = void 0;
            var imageSliderStyle = {};
            var blackHole = void 0,
                blackHoleSize = void 0;
            if (_this.vinyl !== null) {
                if (_this.props.isFullscreenActivated) {
                    width = _this.props.fullscreenWidth;
                    height = _this.props.fullscreenHeight;
                } else {
                    width = _this.props.width;
                    height = _this.props.height;
                }
                var imgWidth = _this.vinyl.width;
                var imgHeight = _this.vinyl.height;

                if (imgWidth >= imgHeight) {
                    if (imgHeight / imgWidth * width <= height) {
                        blackHoleSize = width;
                        imageSliderStyle = _this.adaptImageToWidth(width, height);
                    } else {
                        blackHoleSize = height;
                        imageSliderStyle = _this.adaptImageToHeight(width, height);
                    }
                } else {
                    if (imgHeight / imgWidth * width <= height) {
                        blackHoleSize = width;
                        imageSliderStyle = _this.adaptImageToWidth(width, height);
                    } else {
                        blackHoleSize = height;
                        imageSliderStyle = _this.adaptImageToHeight(width, height);
                    }
                }
            }
            if (_this.props.rpm !== 0) {
                var angle = _this.props.rpm * 360 / 60 * _this.props.currentTime;
                imageSliderStyle.transform = 'rotate(' + angle + 'deg)';
                imageSliderStyle.borderRadius = "100%";
                imageSliderStyle.overflow = "hidden";
                blackHole = _react2.default.createElement('div', { style: {
                        marginLeft: "-" + blackHoleSize / 20 + "px",
                        marginTop: "-" + blackHoleSize / 20 + "px",
                        height: "" + blackHoleSize / 10 + "px",
                        width: "" + blackHoleSize / 10 + "px",
                        backgroundColor: "black",
                        borderRadius: "100%",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        zIndex: "10"
                    } });
            }

            return _react2.default.createElement(
                'span',
                null,
                blackHole,
                _react2.default.createElement('img', { style: imageSliderStyle, src: _this.props.vinyl, alt: '' })
            );
        };

        _this.load();
        return _this;
    }

    return Vinyl;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isInitialized: state.isInitialized,
        fullscreenWidth: window.innerWidth,
        fullscreenHeight: window.innerHeight,
        isFullscreenActivated: state.isFullscreenActivated,
        vinyl: state.vinyl,
        isVinylReady: state.isVinylReady,
        currentTime: state.currentTime,
        isFullScreenActivated: state.isFullScreenActivated,
        width: state.width,
        height: state.height,
        rpm: state.rpm
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { forwardRef: true })(Vinyl);
module.exports = exports['default'];