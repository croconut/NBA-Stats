"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedActions = void 0;
var redux_1 = require("redux");
exports.SupportedActions = {
    addT: "favorites/addTeam",
    removeT: "favorites/removeTeam",
    addP: "favorites/addPlayer",
    removeP: "favorites/removePlayer",
};
var addTeam = function (text) {
    return {
        type: exports.SupportedActions.addT,
        payload: text,
    };
};
var removeTeam = function (text) {
    return {
        type: exports.SupportedActions.removeT,
        payload: text,
    };
};
var addPlayer = function (text) {
    return {
        type: exports.SupportedActions.addT,
        payload: text,
    };
};
var removePlayer = function (text) {
    return {
        type: exports.SupportedActions.removeT,
        payload: text,
    };
};
var initialState = { teams: new Set(), players: new Set() };
function teamReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var inArr = state.teams.has(action.payload);
    if (action.type === exports.SupportedActions.addT && !inArr) {
        return __assign(__assign({}, state), { teams: state.teams.add(action.payload) });
    }
    else if (action.type === exports.SupportedActions.removeT && inArr) {
        return __assign(__assign({}, state), { teams: state.teams.delete(action.payload) });
    }
    return state;
}
function playerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var inArr = state.players.has(action.payload);
    if (action.type === exports.SupportedActions.addP && !inArr) {
        return __assign(__assign({}, state), { players: state.players.add(action.payload) });
    }
    else if (action.type === exports.SupportedActions.removeP && inArr) {
        return __assign(__assign({}, state), { players: state.players.delete(action.payload) });
    }
    return state;
}
var rootReducer = redux_1.combineReducers({
    teams: teamReducer,
    players: playerReducer,
});
