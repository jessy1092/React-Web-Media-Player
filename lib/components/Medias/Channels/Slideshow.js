'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MINIMUM_BUFFERED_TIME = 2; //buffered time to be loaded before launching the slideshow in seconds
var REFRESH_TIME_IN_MILLISECONDS = 10;

var Slideshow = function (_Component) {
    _inherits(Slideshow, _Component);

    function Slideshow(props) {
        _classCallCheck(this, Slideshow);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getCurrentTime = function () {
            return _this.currentTime;
        };

        _this.load = function (time) {
            if (time === undefined || time < 0) {
                time = 0;
            }
            _this.startTime = time;
            var imageStartTime = 0;
            for (var i = 0; i < _this.props.slideshow.length; ++i) {
                var imageEndTime = _this.props.slideshow[i].endTime;
                if (time < imageEndTime) {
                    var image = new Image();
                    image.endTime = imageEndTime;
                    image.startTime = imageStartTime;
                    image.onload = function (e) {
                        _this.addPortionBuffered(e.target.startTime, e.target.endTime);
                        if (_this.hasEnoughBuffered(_this.startTime) && !_this.props.isSlideshowReady) {
                            _this.props.dispatch({ type: 'SLIDESHOW_IS_READY' });
                        }
                    };
                    image.src = _this.props.slideshow[i].img;
                    _this.props.dispatch({ type: 'ADD_IMAGE', payload: { index: i, image: image } });
                }
                imageStartTime = imageEndTime;
            }
        };

        _this.play = function () {
            if (!_this.hasEnoughBuffered(_this.currentTime)) {
                _this.props.dispatch({ type: 'SLIDESHOW_IS_NOT_READY' });
                _this.load(_this.currentTime);
                return;
            } else {
                _this.props.dispatch({ type: 'SLIDESHOW_IS_READY' });
            }
            _this.load(_this.currentTime);
            //this.currentTime = time;
            _this.tempTime = new Date();
            //play mechanism (relaunch refresh)
            _this.relaunchRefresh();
        };

        _this.changeTime = function (time) {
            if (time === undefined || time < 0) {
                time = 0;
            }
            if (!_this.hasEnoughBuffered(time)) {
                _this.props.dispatch({ type: 'SLIDESHOW_IS_NOT_READY' });
                _this.load(time);
            } else {
                _this.props.dispatch({ type: 'SLIDESHOW_IS_READY' });
            }
            _this.currentTime = time;
            _this.tempTime = new Date();
        };

        _this.pause = function (time) {
            if (time !== undefined) _this.currentTime = time;
            if (_this.hasEnoughBuffered(time)) {
                _this.updateView();
            }
            _this.stopRefresh();
        };

        _this.stop = function () {
            _this.stopRefresh();
            _this.currentTime = _this.props.duration;
        };

        _this.getTimePreviousImage = function () {
            for (var i = 0; i <= _this.props.slideshow.length; ++i) {
                if (i === _this.props.slideshow.length) {
                    if (i < 3) {
                        return 0;
                    } else {
                        return _this.props.slideshow[i - 2].endTime;
                    }
                } else if (_this.props.currentTime < _this.props.slideshow[i].endTime) {
                    if (i < 2) {
                        return 0;
                    } else {
                        return _this.props.slideshow[i - 2].endTime;
                    }
                }
            }
        };

        _this.getTimeNextImage = function () {
            for (var i = 0; i < _this.props.slideshow.length; ++i) {
                if (_this.props.currentTime < _this.props.slideshow[i].endTime) {
                    return _this.props.slideshow[i].endTime;
                }
                if (_this.props.slideshow[i].endTime === _this.props.duration) {
                    return _this.props.duration;
                }
            }
        };

        _this.hasEnoughBuffered = function (time) {
            for (var i = 0; i < _this.buffered.length; i++) {
                var startTime = _this.buffered[i][0];
                var endTime = _this.buffered[i][1];
                var hasStartTimeBuffered = void 0;
                if (time >= startTime && time <= endTime) {
                    hasStartTimeBuffered = true;
                } else {
                    hasStartTimeBuffered = false;
                }
                var minimumTimeToBeLoaded = time + MINIMUM_BUFFERED_TIME;
                if (minimumTimeToBeLoaded > _this.props.duration) minimumTimeToBeLoaded = _this.props.duration;

                if (hasStartTimeBuffered && minimumTimeToBeLoaded <= endTime) {
                    return true;
                }
            }
            return false;
        };

        _this.timeRangeBuffered = function (time) {
            for (var i = 0; i < _this.buffered.length; i++) {
                var portionStartTime = _this.buffered[i][0];
                var portionEndTime = _this.buffered[i][1];
                if (time >= portionStartTime && time <= portionEndTime) {
                    return portionEndTime;
                }
            }
            return time;
        };

        _this.updateView = function () {
            for (var i = 0; i < _this.props.slideshow.length; ++i) {
                if (_this.currentTime < _this.props.slideshow[i].endTime) {
                    _this.props.dispatch({ type: 'UPDATE_IMAGE_DISPLAYED', payload: { imageDisplayed: _this.props.slideshow[i] } });
                    break;
                }
            }
        };

        _this.adaptImageToWidth = function (width, height) {
            var imgWidth = _this.props.imageDisplayed.element.width;
            var imgHeight = _this.props.imageDisplayed.element.height;
            var margin = (height - imgHeight / imgWidth * width) / 2;
            return {
                marginTop: margin + "px",
                width: "100%",
                height: imgHeight / imgWidth * width + "px"
            };
        };

        _this.adaptImageToHeight = function (width, height) {
            var imgWidth = _this.props.imageDisplayed.element.width;
            var imgHeight = _this.props.imageDisplayed.element.height;
            var margin = (width - imgWidth / imgHeight * height) / 2;
            return {
                marginLeft: margin + "px",
                height: "100%",
                width: imgWidth / imgHeight * height + "px"
            };
        };

        _this.relaunchRefresh = function () {
            _this.stopRefresh();
            _this.launchRefresh();
        };

        _this.launchRefresh = function () {
            _this.timerFunction = window.setInterval(_this.refresh, REFRESH_TIME_IN_MILLISECONDS);
        };

        _this.stopRefresh = function () {
            window.clearInterval(_this.timerFunction);
        };

        _this.refresh = function () {
            if (!_this.hasEnoughBuffered(_this.currentTime)) {
                _this.props.dispatch({ type: 'SLIDESHOW_IS_NOT_READY' });
                _this.load(_this.currentTime);
            }
            var now = new Date();
            var deltaTime = (now.getTime() - _this.tempTime.getTime()) / 1000;
            _this.tempTime = now;
            _this.currentTime += deltaTime;
            if (_this.currentTime >= _this.props.duration) {
                _this.stop();
            }
            _this.updateView();
        };

        _this.updatePortionsBuffered = function () {
            for (var i = 0; i < _this.buffered.length; i++) {
                for (var j = 0; j < _this.buffered.length; j++) {
                    if (i !== j) {
                        var startTime1stPortion = _this.buffered[i][0];
                        var endTime1stPortion = _this.buffered[i][1];
                        var startTime2ndPortion = _this.buffered[j][0];
                        var endTime2ndPortion = _this.buffered[j][1];
                        if (endTime1stPortion === startTime2ndPortion) {
                            _this.buffered[i][1] = endTime2ndPortion;
                            _this.buffered.splice(j, 1);
                            i = 0;
                            continue;
                        }
                        if (endTime2ndPortion === startTime1stPortion) {
                            _this.buffered[j][1] = endTime1stPortion;
                            _this.buffered.splice(i, 1);
                            i = 0;
                            continue;
                        }
                        if (startTime1stPortion >= startTime2ndPortion && endTime1stPortion <= endTime2ndPortion) {
                            _this.buffered.splice(i, 1);
                            i = 0;
                            continue;
                        }
                    }
                }
            }
        };

        _this.addPortionBuffered = function (startTime, endTime) {
            for (var i = 0; i < _this.buffered.length; i++) {
                var portionStartTime = _this.buffered[i][0];
                var portionEndTime = _this.buffered[i][1];
                if (portionEndTime === startTime) {
                    _this.buffered[i][1] = endTime;
                    _this.updatePortionsBuffered();
                    return;
                } else if (endTime === portionStartTime) {
                    _this.buffered[i][0] = startTime;
                    _this.updatePortionsBuffered();
                    return;
                }
            }
            _this.buffered.push([startTime, endTime]);
            _this.updatePortionsBuffered();
        };

        _this.render = function () {

            var width = void 0,
                height = void 0,
                imageSliderStyle = void 0,
                src = void 0;
            if (_this.props.imageDisplayed !== null) {
                if (_this.props.isFullscreenActivated) {
                    width = _this.props.fullscreenWidth;
                    height = _this.props.fullscreenHeight;
                } else {
                    width = _this.props.width;
                    height = _this.props.height;
                }
                var imgWidth = _this.props.imageDisplayed.element.width;
                var imgHeight = _this.props.imageDisplayed.element.height;

                if (imgWidth >= imgHeight) {
                    if (imgHeight / imgWidth * width <= height) {
                        imageSliderStyle = _this.adaptImageToWidth(width, height);
                    } else {
                        imageSliderStyle = _this.adaptImageToHeight(width, height);
                    }
                } else {
                    if (imgHeight / imgWidth * width <= height) {
                        imageSliderStyle = _this.adaptImageToWidth(width, height);
                    } else {
                        imageSliderStyle = _this.adaptImageToHeight(width, height);
                    }
                }
                src = _this.props.imageDisplayed.img;
            }

            return _react2.default.createElement('img', { style: imageSliderStyle, src: src, ref: function ref(imageSlider) {
                    return _this.imageSlider = imageSlider;
                }, alt: '' });
        };

        _this.currentTime = 0;
        _this.buffered = [];
        _this.startTime = 0;
        _this.tempTime = null;
        _this.imageDisplayed = null;
        _this.timerFunction = null;
        return _this;
    }

    /*
        This function merge the cells that are following in time
    */


    return Slideshow;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        fullscreenWidth: window.innerWidth,
        fullscreenHeight: window.innerHeight,
        imageDisplayed: state.imageDisplayed,
        isFullscreenActivated: state.isFullscreenActivated,
        isSlideshowReady: state.isSlideshowReady,
        slideshow: state.slideshow,
        duration: state.duration,
        currentTime: state.currentTime,
        isFullScreenActivated: state.isFullScreenActivated,
        width: state.width,
        height: state.height
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { forwardRef: true })(Slideshow);
module.exports = exports['default'];