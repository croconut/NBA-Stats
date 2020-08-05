import React, { useState } from "react";
import { TeamAbbrev, Favorites } from "../globals/Types";
import { createStore, combineReducers } from "redux";
import type { Action } from "redux";

export const SupportedActions = {
  addT: "favorites/addTeam",
  removeT: "favorites/removeTeam",
  addP: "favorites/addPlayer",
  removeP: "favorites/removePlayer",
};

export interface TeamAction extends Action {
  type: string;
  payload: TeamAbbrev;
}

export interface PlayerAction extends Action {
  type: string;
  payload: number;
}

const addTeam = (text: TeamAbbrev): TeamAction => {
  return {
    type: SupportedActions.addT,
    payload: text,
  };
};

const removeTeam = (text: TeamAbbrev): TeamAction => {
  return {
    type: SupportedActions.removeT,
    payload: text,
  };
};

const addPlayer = (text: number): PlayerAction => {
  return {
    type: SupportedActions.addT,
    payload: text,
  };
};

const removePlayer = (text: number): PlayerAction => {
  return {
    type: SupportedActions.removeT,
    payload: text,
  };
};

const initialState: Favorites = { teams: new Set<TeamAbbrev>(), players: new Set<number>() };

function teamReducer(state = initialState, action: TeamAction) {
  const inArr: boolean = state.teams.has(action.payload);
  if (action.type === SupportedActions.addT && !inArr) {
    return {
      ...state,
      teams: state.teams.add(action.payload),
    };
  } else if (action.type === SupportedActions.removeT && inArr) {
    return {
      ...state,
      teams: state.teams.delete(action.payload),
    };
  }
  return state;
}

function playerReducer(state = initialState, action: PlayerAction) {
  const inArr: boolean = state.players.has(action.payload);
  if (action.type === SupportedActions.addP && !inArr) {
    return {
      ...state,
      players: state.players.add(action.payload),
    };
  } else if (action.type === SupportedActions.removeP && inArr) {
    return {
      ...state,
      players: state.players.delete(action.payload),
    };
  }
  return state;
}

const rootReducer = combineReducers({
  teams: teamReducer,
  players: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
