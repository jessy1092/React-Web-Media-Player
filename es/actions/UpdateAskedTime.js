var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var updateAskedTime = function updateAskedTime(state, action) {

    return _extends({}, state, {
        askedTime: action.payload.askedTime
    });
};

export default updateAskedTime;