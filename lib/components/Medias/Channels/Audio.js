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

var Audio = function (_Component) {
    _inherits(Audio, _Component);

    function Audio() {
        var _temp, _this, _ret;

        _classCallCheck(this, Audio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.isPlaying = function () {
            return !_this.audio.paused;
        }, _this.getCurrentTime = function () {
            return _this.audio.currentTime;
        }, _this.load = function () {
            _this.audio.load();
        }, _this.play = function () {
            if (!_this.isPlaying()) {
                var playPromise = _this.audio.play();
                if (playPromise !== undefined) {
                    playPromise.then(function (_) {
                        // Automatic playback started!
                    }).catch(function (_) {
                        // Auto-play was prevented
                    });
                }
            }
        }, _this.changeTime = function (time) {
            _this.audio.currentTime = time;
        }, _this.pause = function () {
            if (_this.isPlaying()) _this.audio.pause();
        }, _this.stop = function () {
            if (_this.isPlaying()) _this.audio.pause();
            _this.audio.currentTime = _this.props.duration;
        }, _this.timeRangeBuffered = function (time) {
            for (var i = 0; i < _this.audio.buffered.length; i++) {
                var portionStartTime = _this.audio.buffered.start(i);
                var portionEndTime = _this.audio.buffered.end(i);
                if (time >= portionStartTime && time <= portionEndTime) {
                    return portionEndTime;
                }
            }
            return time;
        }, _this.setVolume = function (volume) {
            _this.audio.volume = volume;
        }, _this.mute = function () {
            _this.audio.muted = true;
        }, _this.unMute = function () {
            _this.audio.muted = false;
        }, _this.getDuration = function () {
            return _this.audio.duration;
        }, _this.handleWaiting = function () {
            if (!(0, _Utils.isIE)() && _this.audio.currentTime < _this.audio.duration - FLOAT_IMPRECISION) _this.props.dispatch({ type: 'AUDIO_IS_NOT_READY' });
        }, _this.handleCanPlayThrough = function () {
            if (!(0, _Utils.isIE)()) _this.props.dispatch({ type: 'AUDIO_IS_READY' });
        }, _this.handleSeeking = function () {
            if ((0, _Utils.isIE)()) _this.props.dispatch({ type: 'AUDIO_IS_NOT_READY' });
        }, _this.handleSeeked = function () {
            if ((0, _Utils.isIE)()) _this.props.dispatch({ type: 'AUDIO_IS_READY' });
        }, _this.handlePlay = function () {
            if ((0, _Utils.isIE)()) {
                _this.props.dispatch({ type: 'AUDIO_IS_READY' });
            }
        }, _this.handleLoadedMetaData = function () {
            if (_this.props.hasVinyl) {
                var duration = _this.audio.duration;
                _this.props.dispatch({ type: 'UPDATE_DURATION', payload: { duration: duration } });
            }
        }, _this.componentDidMount = function () {
            if (_this.props.muted) _this.mute();
        }, _this.render = function () {
            return _react2.default.createElement('audio', {
                src: _this.props.audio,
                ref: function ref(audio) {
                    return _this.audio = audio;
                },
                onWaiting: _this.handleWaiting,
                onCanPlayThrough: _this.handleCanPlayThrough,
                onSeeked: _this.handleSeeked,
                onSeeking: _this.handleSeeking,
                onPlay: _this.handlePlay,
                onLoadedMetadata: _this.handleLoadedMetaData
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Audio;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        duration: state.duration,
        audio: state.audio,
        hasVinyl: state.hasVinyl,
        muted: state.muted
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { forwardRef: true })(Audio);
module.exports = exports['default'];