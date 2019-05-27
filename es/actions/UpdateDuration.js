var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var updateDuration = function updateDuration(state, action) {

    return _extends({}, state, {
        duration: action.payload.duration
    });
};

export default updateDuration;