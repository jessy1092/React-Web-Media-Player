"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var channelsWait = function channelsWait(state) {
    return _extends({}, state, {
        channelsWait: true
    });
};

exports.default = channelsWait;
module.exports = exports["default"];