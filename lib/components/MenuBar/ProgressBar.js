'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./ProgressBar.css');

var _Utils = require('../../services/Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_Component) {
    _inherits(ProgressBar, _Component);

    function ProgressBar() {
        var _temp, _this, _ret;

        _classCallCheck(this, ProgressBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleMouseDown = function (e) {
            e.stopPropagation();
            _this.animateScrubberButton(e);
        }, _this.animateScrubberButton = function (e) {
            _this.props.dispatch({ type: 'CHANNELS_WAIT' });
            _this.props.dispatch({ type: 'PREVENT_MENU_HIDING' });
            _this.props.dispatch({ type: 'PREVENT_UNHIGHLIGHT_PROGRESS_BAR' });
            var askedTime = _this.calculateTimeFromXCoord(e.clientX);
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            _this.props.dispatch({ type: 'UPDATE_ASKED_TIME', payload: { askedTime: askedTime } });
            document.addEventListener('mousemove', _this.moveScrubberButton, true);
            document.addEventListener('mouseup', _this.stopScrubberButton, true);
        }, _this.moveScrubberButton = function (e) {
            e.stopPropagation();
            var askedTime = _this.calculateTimeFromXCoord(e.clientX);
            _this.updateSizeProgressBarDesired(e.clientX - _this.progressBarDesired.getBoundingClientRect().left);
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            _this.props.dispatch({ type: 'UPDATE_ASKED_TIME', payload: { askedTime: askedTime } });
        }, _this.stopScrubberButton = function (e) {
            e.stopPropagation();
            document.removeEventListener('mousemove', _this.moveScrubberButton, true);
            document.removeEventListener('mouseup', _this.stopScrubberButton, true);
            var askedTime = _this.calculateTimeFromXCoord(e.clientX);
            _this.props.dispatch({ type: 'UPDATE_ASKED_TIME', payload: { askedTime: askedTime } });
            _this.props.dispatch({ type: 'ALLOW_UNHIGHLIGHT_PROGRESS_BAR' });
            _this.props.dispatch({ type: 'ALLOW_MENU_HIDING' });
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            _this.updateSizeProgressBarDesired(e.clientX - _this.progressBarDesired.getBoundingClientRect().left);
            if (!(0, _Utils.isInsideElement)(_this.progressBarWrapper, e)) _this.props.dispatch({ type: 'UNHIGHLIGHT_PROGRESS_BAR' });
            _this.props.dispatch({ type: 'CHANNELS_CONTINUE' });
        }, _this.calculateTimeFromXCoord = function (clientX) {
            var x = clientX - _this.progressBarWrapper.getBoundingClientRect().left;
            if (x <= 0 || _this.props.duration === 0) {
                return 0;
            } else if (x >= _this.progressBarWrapper.clientWidth) {
                return _this.props.duration;
            } else {
                return x / _this.progressBarWrapper.clientWidth * _this.props.duration;
            }
        }, _this.handleMouseEnter = function (e) {
            e.stopPropagation();
            _this.props.dispatch({ type: 'HIGHLIGHT_PROGRESS_BAR' });
            _this.updateSizeProgressBarDesired(e.clientX - _this.progressBarDesired.getBoundingClientRect().left);
        }, _this.handleMouseLeave = function (e) {
            e.stopPropagation();
            if (_this.props.allowUnhighlightProgressBar) _this.props.dispatch({ type: 'UNHIGHLIGHT_PROGRESS_BAR' });
            _this.updateSizeProgressBarDesired(0);
        }, _this.handleClick = function (e) {
            e.stopPropagation();
        }, _this.handleMouseMove = function (e) {
            e.stopPropagation();
            _this.updateSizeProgressBarDesired(e.clientX - _this.progressBarDesired.getBoundingClientRect().left);
        }, _this.updateSizeProgressBarDesired = function (size) {
            if (size > _this.progressBarWrapper.getBoundingClientRect().width) size = _this.progressBarWrapper.getBoundingClientRect().width;
            _this.progressBarDesired.style.width = size + "px";
        }, _this.render = function () {

            var progressBarLeftMargin = void 0,
                loadedBarLeftMargin = void 0;
            if (_this.props.duration > 0) progressBarLeftMargin = _this.props.currentTime / _this.props.duration * 100 + "%";
            if (_this.props.duration > 0) loadedBarLeftMargin = _this.props.timeRangeBuffered / _this.props.duration * 100 + "%";else progressBarLeftMargin = "0%";
            var scrubberButton = void 0,
                progressBarWrappper = void 0,
                progressBarClassName = void 0,
                progressBarLoadedClassName = void 0,
                progressBarProgressionClassName = void 0,
                progressBarDesiredClassName = void 0;
            if (_this.props.highlightProgressBar) {
                scrubberButton = _react2.default.createElement('div', { className: 'wmp-scrubber-button', ref: function ref(node) {
                        return _this.nodeScrubberButton = node;
                    }, style: { left: progressBarLeftMargin } });
                progressBarWrappper = "wmp-progress-bar-wrapper wmp-progress-bar-wrapper-highighted";
                progressBarClassName = "wmp-progress-bar wmp-progress-bar-highighted";
                progressBarLoadedClassName = "wmp-progress-bar loaded wmp-progress-bar-highighted";
                progressBarProgressionClassName = "wmp-progress-bar progression wmp-progress-bar-highighted";
                progressBarDesiredClassName = "wmp-progress-bar desired wmp-progress-bar-highighted";
            } else {
                progressBarWrappper = "wmp-progress-bar-wrapper";
                progressBarClassName = "wmp-progress-bar";
                progressBarLoadedClassName = "wmp-progress-bar loaded";
                progressBarProgressionClassName = "wmp-progress-bar progression";
                progressBarDesiredClassName = "wmp-progress-bar desired";
            }

            return _react2.default.createElement(
                'div',
                { className: progressBarWrappper, ref: function ref(progressBarWrapper) {
                        return _this.progressBarWrapper = progressBarWrapper;
                    }, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, onMouseMove: _this.handleMouseMove, onMouseDown: _this.handleMouseDown, onClick: _this.handleClick },
                _react2.default.createElement('div', { className: progressBarClassName }),
                _react2.default.createElement('div', { className: progressBarLoadedClassName, style: { width: loadedBarLeftMargin } }),
                _react2.default.createElement('div', { className: progressBarProgressionClassName, style: { width: progressBarLeftMargin, backgroundColor: _this.props.color } }),
                _react2.default.createElement('div', { className: progressBarDesiredClassName, ref: function ref(progressBarDesired) {
                        return _this.progressBarDesired = progressBarDesired;
                    } }),
                scrubberButton
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ProgressBar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        timeRangeBuffered: state.timeRangeBuffered,
        highlightProgressBar: state.highlightProgressBar,
        currentTime: state.currentTime,
        duration: state.duration,
        progressBarLeftMargin: state.progressBarLeftMargin,
        allowUnhighlightProgressBar: state.allowUnhighlightProgressBar,
        color: state.color
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProgressBar);
module.exports = exports['default'];