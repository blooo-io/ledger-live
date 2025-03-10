import { handleActions } from "redux-actions";
import type { Action, ReducerMap } from "redux-actions";
import { createSelector } from "reselect";
import { NetworkDown } from "@ledgerhq/errors";
import type { AppState, State } from "./types";

import type {
  AppStateAddBackgroundEventPayload,
  AppStateIsConnectedPayload,
  AppStatePayload,
  AppStateSetHasConnectedDevicePayload,
  AppStateSetModalLockPayload,
  DangerouslyOverrideStatePayload,
} from "../actions/types";
import { AppStateActionTypes } from "../actions/types";

export type AsyncState = {
  isConnected: boolean | null;
};

export const INITIAL_STATE: AppState = {
  isConnected: true,
  hasConnectedDevice: false, // NB for this current session, have we done a device action with a device.
  modalLock: false,
  backgroundEvents: [],
  debugMenuVisible: false,
};

const handlers: ReducerMap<AppState, AppStatePayload> = {
  [AppStateActionTypes.DEBUG_MENU_VISIBLE]: state => ({
    ...state,
    debugMenuVisible: true,
  }),

  [AppStateActionTypes.SYNC_IS_CONNECTED]: (state, action) => ({
    ...state,
    isConnected: (action as Action<AppStateIsConnectedPayload>).payload
      .isConnected,
  }),

  [AppStateActionTypes.HAS_CONNECTED_DEVICE]: (state, action) => ({
    ...state,
    hasConnectedDevice: (action as Action<AppStateSetHasConnectedDevicePayload>)
      .payload.hasConnectedDevice,
  }),

  [AppStateActionTypes.SET_MODAL_LOCK]: (state, action) => ({
    ...state,
    modalLock: (action as Action<AppStateSetModalLockPayload>).payload
      .modalLock,
  }),

  [AppStateActionTypes.QUEUE_BACKGROUND_EVENT]: (state, action) => ({
    ...state,
    backgroundEvents: [
      ...state.backgroundEvents,
      (action as Action<AppStateAddBackgroundEventPayload>).payload.event,
    ],
  }),

  [AppStateActionTypes.DEQUEUE_BACKGROUND_EVENT]: (state: AppState) => {
    const [_, ...tail] = state.backgroundEvents;
    return {
      ...state,
      backgroundEvents: tail,
    };
  },

  [AppStateActionTypes.CLEAR_BACKGROUND_EVENTS]: (state: AppState) => ({
    ...state,
    backgroundEvents: [],
  }),

  [AppStateActionTypes.DANGEROUSLY_OVERRIDE_STATE]: (
    state: AppState,
    action,
  ): AppState => ({
    ...state,
    ...(action as Action<DangerouslyOverrideStatePayload>).payload.appstate,
  }),
};

// Selectors

export const isDebugMenuVisible = (state: State) =>
  state.appstate.debugMenuVisible;
export const isConnectedSelector = (state: State) => state.appstate.isConnected;
export const isModalLockedSelector = (state: State) => state.appstate.modalLock;
export const hasConnectedDeviceSelector = (state: State) =>
  state.appstate.hasConnectedDevice;

export const backgroundEventsSelector = (state: State) =>
  state.appstate.backgroundEvents;

export const nextBackgroundEventSelector = (state: State) =>
  state.appstate.backgroundEvents[0];

const globalNetworkDown = new NetworkDown();

export const networkErrorSelector = createSelector(
  isConnectedSelector,
  (isConnected: boolean | null) => (!isConnected ? globalNetworkDown : null),
);

export default handleActions<AppState, AppStatePayload>(
  handlers,
  INITIAL_STATE,
);
