function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './VolumeControl.css';
import './Button.css';
import { isInsideElement } from '../../services/Utils';

var volumeDownLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', className: 'volume-down-logo' },
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z' }),
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var volumeOffLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', className: 'volume-off-logo' },
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z' }),
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var volumeUpLogo = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '26', height: '26', viewBox: '0 0 24 24', className: 'volume-up-logo' },
    React.createElement('path', { className: 'wmp-tool-button-logo', fill: '#e4e5e8', d: 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' }),
    React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var VolumeControl = function (_Component) {
    _inherits(VolumeControl, _Component);

    function VolumeControl(props) {
        _classCallCheck(this, VolumeControl);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleMouseLeave = function (e) {
            if (_this.props.allowMouseLeaveVolumeSlider) _this.props.dispatch({ type: 'HIDE_VOLUME_SLIDER' });
        };

        _this.handleMouseEnter = function (e) {
            e.stopPropagation();
            _this.props.dispatch({ type: 'SHOW_VOLUME_SLIDER' });
        };

        _this.handleClick = function (e) {
            e.stopPropagation();
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            if (_this.props.muted) {
                _this.props.dispatch({ type: 'UNMUTE' });
                _this.props.dispatch({ type: 'UPDATE_VOLUME', payload: { volume: _this.props.volume } });
            } else if (_this.props.volume === 0) {
                _this.props.dispatch({ type: 'UPDATE_VOLUME', payload: { volume: _this.props.pastVolume } });
            } else {
                _this.props.dispatch({ type: 'SAVE_ACTUAL_VOLUME_AS_PAST_VOLUME' });
                _this.props.dispatch({ type: 'UPDATE_VOLUME', payload: { volume: 0 } });
            }
            _this.props.dispatch({ type: 'SHOW_VOLUME_SLIDER' });
        };

        _this.handleMouseDownVolumeBar = function (e) {
            e.stopPropagation();
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            if (_this.props.muted) _this.props.dispatch({ type: 'UNMUTE' });
            _this.animateVolumeScrubberButton(e);
        };

        _this.animateVolumeScrubberButton = function (e) {
            if (_this.props.volume !== 0) _this.props.dispatch({ type: 'SAVE_ACTUAL_VOLUME_AS_PAST_VOLUME' });
            _this.props.dispatch({ type: 'PREVENT_MENU_HIDING' });
            _this.props.dispatch({ type: 'PREVENT_MOUSE_LEAVE_VOLUME_SLIDER' });
            var volume = _this.calculateVolumeFromXCoord(e.clientX);
            _this.props.dispatch({ type: 'UPDATE_VOLUME', payload: { volume: volume } });
            document.addEventListener('mousemove', _this.moveVolumeScrubberButton, true);
            document.addEventListener('mouseup', _this.stopVolumeScrubberButton, true);
        };

        _this.moveVolumeScrubberButton = function (e) {
            e.stopPropagation();
            var volume = _this.calculateVolumeFromXCoord(e.clientX);
            _this.props.dispatch({ type: 'UPDATE_VOLUME', payload: { volume: volume } });
        };

        _this.stopVolumeScrubberButton = function (e) {
            e.stopPropagation();
            document.removeEventListener('mousemove', _this.moveVolumeScrubberButton, true);
            document.removeEventListener('mouseup', _this.stopVolumeScrubberButton, true);
            var volume = _this.calculateVolumeFromXCoord(e.clientX);
            _this.props.dispatch({ type: 'UPDATE_VOLUME', payload: { volume: volume } });
            _this.props.dispatch({ type: 'ALLOW_MOUSE_LEAVE_VOLUME_SLIDER' });
            _this.props.dispatch({ type: 'ALLOW_MENU_HIDING' });
            _this.props.dispatch({ type: 'USER_ACTIVE' });
            if (!isInsideElement(_this.spanContainer, e)) _this.props.dispatch({ type: 'HIDE_VOLUME_SLIDER' });
        };

        _this.calculateVolumeSliderLeftMargin = function (volume) {
            if (_this.props.muted) return "0%";else return volume * (100 - _this.nodeScrubberButton.clientWidth / _this.nodeTotalBar.clientWidth * 100) + "%";
        };

        _this.calculateVolumeFromXCoord = function (clientX) {
            var maxX = _this.nodeTotalBar.clientWidth;
            if (maxX === 0) {
                return;
            }
            var x = clientX - _this.nodeTotalBar.getBoundingClientRect().left;
            if (x > maxX) x = maxX;
            if (x <= 0) {
                x = 0;
            }
            return x / maxX;
        };

        _this.componentDidMount = function () {
            if (_this.props.volumeSliderLeftMargin === "calculateMe!") {
                _this.props.dispatch({ type: 'UPDATE_VOLUME_SLIDER_LEFT_MARGIN', payload: { volumeSliderLeftMargin: _this.calculateVolumeSliderLeftMargin(_this.props.volume) } });
                _this.props.dispatch({ type: 'HIDE_VOLUME_SLIDER' });
            }
        };

        _this.componentDidUpdate = function (prevProps) {
            if (prevProps.volume !== _this.props.volume || prevProps.muted !== _this.props.muted) {
                _this.props.dispatch({ type: 'UPDATE_VOLUME_SLIDER_LEFT_MARGIN', payload: { volumeSliderLeftMargin: _this.calculateVolumeSliderLeftMargin(_this.props.volume) } });
            }
        };

        _this.render = function () {
            var icon = void 0,
                volumeSlider = void 0;
            if (_this.props.volume === 0 || _this.props.muted) {
                icon = volumeOffLogo;
            } else if (_this.props.volume < 0.5) {
                icon = volumeDownLogo;
            } else {
                icon = volumeUpLogo;
            }
            if (_this.props.showVolumeSlider) {
                volumeSlider = React.createElement(
                    'div',
                    { className: 'wmp-tool-button wmp-volume-slider', onMouseDown: _this.handleMouseDownVolumeBar },
                    React.createElement(
                        'div',
                        { className: 'wmp-volume-slider-total-bar', ref: function ref(node) {
                                return _this.nodeTotalBar = node;
                            } },
                        React.createElement('div', { className: 'wmp-volume-slider-level-bar', style: { width: _this.props.volumeSliderLeftMargin } }),
                        React.createElement('div', { className: 'wmp-volume-slider-left-bar', style: { left: _this.props.volumeSliderLeftMargin } }),
                        React.createElement('div', { className: 'wmp-volume-slider-scrubber-button', style: { left: _this.props.volumeSliderLeftMargin }, ref: function ref(node) {
                                return _this.nodeScrubberButton = node;
                            } })
                    )
                );
            }

            return React.createElement(
                'span',
                { onMouseLeave: _this.handleMouseLeave, ref: function ref(node) {
                        return _this.spanContainer = node;
                    } },
                React.createElement(
                    'div',
                    { className: 'wmp-tool-button logo-padding-medium', onMouseEnter: _this.handleMouseEnter, onClick: _this.handleClick },
                    icon
                ),
                volumeSlider
            );
        };

        _this.nodeScrubberButton = React.createRef();
        _this.nodeTotalBar = React.createRef();
        return _this;
    }

    return VolumeControl;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        volume: state.volume,
        isInitialized: state.isInitialized,
        pastVolume: state.pastVolume,
        volumeSliderLeftMargin: state.volumeSliderLeftMargin,
        showVolumeSlider: state.showVolumeSlider,
        allowMouseLeaveVolumeSlider: state.allowMouseLeaveVolumeSlider,
        muted: state.muted
    };
};

export default connect(mapStateToProps)(VolumeControl);