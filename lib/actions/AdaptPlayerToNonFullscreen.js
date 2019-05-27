"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var adaptPlayerToNonFullscreen = function adaptPlayerToNonFullscreen(state) {
    return _extends({}, state, {
        isFullscreenActivated: false
    });
};

exports.default = adaptPlayerToNonFullscreen;
module.exports = exports["default"];