"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var switchFullscreen = function switchFullscreen(state) {
    var isFullscreen = !state.isFullscreen;
    return _extends({}, state, {
        isFullscreen: isFullscreen
    });
};

exports.default = switchFullscreen;
module.exports = exports["default"];