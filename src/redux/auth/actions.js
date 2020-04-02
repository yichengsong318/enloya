import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOAD_ME,
  LOAD_ME_SUCCESS,
  LOAD_ME_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from '../actions';

export const loginUser = (user, onSuccess) => ({
  type: LOGIN_USER,
  payload: { user, onSuccess }
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message }
});

export const loadMe = (onSuccess, onFailure) => ({
  type: LOAD_ME,
  payload: { onSuccess, onFailure }
});
export const loadMeSuccess = (userInfo) => ({
  type: LOAD_ME_SUCCESS,
  payload: userInfo
});
export const loadMeError = (message) => ({
  type: LOAD_ME_ERROR,
  payload: { message }
});

export const forgotPassword = (forgotUserMail, onSuccess) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotUserMail, onSuccess }
});
export const forgotPasswordSuccess = (forgotUserMail) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: forgotUserMail
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message }
});

export const resetPassword = ({resetPasswordCode,newPassword,onSuccess}) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordCode,newPassword,onSuccess }
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: newPassword
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message }
});



export const registerUser = (user, onSuccess) => ({
  type: REGISTER_USER,
  payload: { user, onSuccess }
})
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user
})
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message }
})

export const logoutUser = (onSuccess) => ({
  type: LOGOUT_USER,
  payload: { onSuccess }
});