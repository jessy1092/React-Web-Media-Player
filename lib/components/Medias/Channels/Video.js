'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Utils = require('../../../services/Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FLOAT_IMPRECISION = 0.1;

var Video = function (_Component) {
    _inherits(Video, _Component);

    function Video() {
        var _temp, _this, _ret;

        _classCallCheck(this, Video);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.isPlaying = function () {
            return !_this.video.paused;
        }, _this.getCurrentTime = function () {
            return _this.video.currentTime;
        }, _this.load = function () {
            _this.video.load();
        }, _this.play = function () {
            if (!_this.isPlaying()) {
                var playPromise = _this.video.play();
                if (playPromise !== undefined) {
                    playPromise.then(function (_) {
                        // Automatic playback started!
                    }).catch(function (_) {
                        // Auto-play was prevented
                    });
                }
            }
        }, _this.changeTime = function (time) {
            _this.video.currentTime = time;
        }, _this.pause = function () {
            if (_this.isPlaying()) _this.video.pause();
        }, _this.stop = function () {
            if (_this.isPlaying()) _this.video.pause();
            _this.video.currentTime = _this.props.duration;
        }, _this.timeRangeBuffered = function (time) {
            for (var i = 0; i < _this.video.buffered.length; i++) {
                var portionStartTime = _this.video.buffered.start(i);
                var portionEndTime = _this.video.buffered.end(i);
                if (time >= portionStartTime && time <= portionEndTime) {
                    return portionEndTime;
                }
            }
            return time;
        }, _this.displayVideo = function () {
            var width = void 0,
                height = void 0;
            if (_this.props.isFullscreenActivated) {
                width = window.screen.width;
                height = window.screen.height;
            } else {
                width = _this.props.width;
                height = _this.props.height;
            }
            _this.video.width = width;
            _this.video.height = height;
        }, _this.setVolume = function (volume) {
            _this.video.volume = volume;
        }, _this.mute = function () {
            _this.video.muted = true;
        }, _this.unMute = function () {
            _this.video.muted = false;
        }, _this.getDuration = function () {
            return _this.video.duration;
        }, _this.handleWaiting = function () {
            if (!(0, _Utils.isIE)() && _this.video.currentTime < _this.video.duration - FLOAT_IMPRECISION) _this.props.dispatch({ type: 'VIDEO_IS_NOT_READY' });
        }, _this.handleCanPlayThrough = function () {
            _this.props.dispatch({ type: 'VIDEO_IS_READY' });
        }, _this.handleLoadedMetaData = function () {
            var duration = _this.video.duration;
            _this.props.dispatch({ type: 'UPDATE_DURATION', payload: { duration: duration } });
            _this.props.dispatch({ type: 'UPDATE_VIDEO_WIDTH', payload: { videoWidth: _this.video.videoWidth } });
            _this.props.dispatch({ type: 'UPDATE_VIDEO_HEIGHT', payload: { videoHeight: _this.video.videoHeight } });
        }, _this.handleSeeking = function () {
            if ((0, _Utils.isIE)() && _this.video.currentTime < _this.video.duration - FLOAT_IMPRECISION && Math.round(_this.video.currentTime * 100) / 100 !== 0) _this.props.dispatch({ type: 'VIDEO_IS_NOT_READY' });
        }, _this.handleSeeked = function () {
            if ((0, _Utils.isIE)()) _this.props.dispatch({ type: 'VIDEO_IS_READY' });
        }, _this.handlePlay = function () {
            if ((0, _Utils.isIE)()) {
                _this.props.dispatch({ type: 'VIDEO_IS_READY' });
            }
        }, _this.adaptImageToWidth = function (width) {
            return {
                marginTop: (_this.props.fullscreenHeight - _this.props.videoHeight / _this.props.videoWidth * _this.props.fullscreenWidth) / 2,
                width: width,
                height: _this.props.videoHeight / _this.props.videoWidth * _this.props.fullscreenWidth
            };
        }, _this.adaptImageToHeight = function (height) {
            return {
                marginLeft: (_this.props.fullscreenWidth - _this.props.videoWidth / _this.props.videoHeight * _this.props.fullscreenHeight) / 2,
                height: height,
                width: _this.props.videoWidth / _this.props.videoHeight * _this.props.fullscreenHeight
            };
        }, _this.componentDidMount = function () {
            if (_this.props.muted) _this.mute();
        }, _this.render = function () {
            var dimensions = void 0;
            if (_this.props.isFullscreenActivated) {
                if (_this.props.videoWidth >= _this.props.videoHeight) {
                    if (_this.props.videoHeight / _this.props.videoWidth * _this.props.fullscreenWidth <= _this.props.fullscreenHeight) {
                        dimensions = _this.adaptImageToWidth(_this.props.fullscreenWidth);
                    } else {
                        dimensions = _this.adaptImageToHeight(_this.props.fullscreenHeight);
                    }
                } else {
                    if (_this.props.videoHeight / _this.props.videoWidth * _this.props.fullscreenWidth <= _this.props.fullscreenHeight) {
                        dimensions = _this.adaptImageToWidth(_this.props.fullscreenWidth);
                    } else {
                        dimensions = _this.adaptImageToHeight(_this.props.fullscreenHeight);
                    }
                }
            } else {
                dimensions = {
                    width: _this.props.width,
                    height: _this.props.height
                };
            }
            return _react2.default.createElement(
                'video',
                {
                    width: dimensions.width,
                    style: { marginLeft: dimensions.marginLeft, marginTop: dimensions.marginTop },
                    ref: function ref(video) {
                        return _this.video = video;
                    },
                    height: dimensions.height,
                    onLoadedMetadata: _this.handleLoadedMetaData,
                    onWaiting: _this.handleWaiting,
                    onCanPlayThrough: _this.handleCanPlayThrough,
                    onSeeked: _this.handleSeeked,
                    onSeeking: _this.handleSeeking,
                    onPlay: _this.handlePlay,
                    onEnded: _this.handleEnded
                },
                _react2.default.createElement('source', { src: _this.props.video })
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Video;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        isPlaying: state.isPlaying,
        fullscreenWidth: window.innerWidth,
        fullscreenHeight: window.innerHeight,
        videoHeight: state.videoHeight,
        videoWidth: state.videoWidth,
        isFullscreenActivated: state.isFullscreenActivated,
        duration: state.duration,
        video: state.video,
        width: state.width,
        height: state.height,
        isReadingTerminated: state.isReadingTerminated,
        muted: state.muted
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { forwardRef: true })(Video);
module.exports = exports['default'];