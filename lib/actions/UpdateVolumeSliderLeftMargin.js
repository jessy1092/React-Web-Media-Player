"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var updateVolumeSliderLeftMargin = function updateVolumeSliderLeftMargin(state, action) {

    return _extends({}, state, {
        volumeSliderLeftMargin: action.payload.volumeSliderLeftMargin
    });
};

exports.default = updateVolumeSliderLeftMargin;
module.exports = exports["default"];