/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";

/* DATA */
export const CREATE_DATA = "CREATE_DATA";
export const CREATE_DATA_SUCCESS = "CREATE_DATA_SUCCESS";
export const CREATE_DATA_ERROR = "CREATE_DATA_ERROR";
export const READ_DATA = "READ_DATA";
export const READ_DATA_SUCCESS = "READ_DATA_SUCCESS";
export const READ_DATA_ERROR = "READ_DATA_ERROR";
export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS";
export const UPDATE_DATA_ERROR = "UPDATE_DATA_ERROR";
export const DELETE_DATA = "DELETE_DATA";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_ERROR = "DELETE_DATA_ERROR";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const LOAD_ME = "LOAD_ME";
export const LOAD_ME_SUCCESS = "LOAD_ME_SUCCESS";
export const LOAD_ME_ERROR = "LOAD_ME_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export * from "./settings/actions";
export * from "./auth/actions";
export * from "./data/actions";
