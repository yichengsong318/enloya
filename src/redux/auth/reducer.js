import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOAD_ME,
  LOAD_ME_SUCCESS,
  LOAD_ME_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from '../actions';

const INIT_STATE = {
  userInfo: localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')) : {},
  userType: localStorage.getItem('user_type'),
  user: localStorage.getItem('user_token'),
  forgotUserMail: '',
  newPassword: '',
  resetPasswordCode: '',
  loading: false,
  errorMessage: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, errorMessage: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, 
        user: action.payload.access_token, 
        userType: action.payload.user_type, 
        userInfo: action.payload.user, errorMessage: '' };
    case LOGIN_USER_ERROR:
      return { ...state, loading: false, user: '', errorMessage: action.payload.message };
    case LOAD_ME:
      return { ...state, loading: true, errorMessage: '' };
    case LOAD_ME_SUCCESS:
      return { ...state, loading: false, 
        userInfo: action.payload.userInfo, 
        userType: action.payload.userType, 
        user: action.payload.user, errorMessage: '' };
    case LOAD_ME_ERROR:
      return { ...state, loading: false, errorMessage: action.payload.message };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, errorMessage: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, forgotUserMail: action.payload, errorMessage: '' };
    case FORGOT_PASSWORD_ERROR:
      return { ...state, loading: false, forgotUserMail: '', errorMessage: action.payload.message };
    case RESET_PASSWORD:
      return { ...state, loading: true, errorMessage: '' };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false, newPassword: action.payload, resetPasswordCode: '', errorMessage: '' };
    case RESET_PASSWORD_ERROR:
      return { ...state, loading: false, newPassword: '', resetPasswordCode: '', errorMessage: action.payload.message };
    case REGISTER_USER:
      return { ...state, loading: true, errorMessage: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.uid, errorMessage: '' };
    case REGISTER_USER_ERROR:
      return { ...state, loading: false, user: '', errorMessage: action.payload.message };
    case LOGOUT_USER:
      return { ...state, user: null, userInfo: null, errorMessage: '' };
    default: return { ...state };
  }
}
