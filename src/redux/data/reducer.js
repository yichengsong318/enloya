import {
  CREATE_DATA,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_ERROR,
  READ_DATA,
  READ_DATA_SUCCESS,
  READ_DATA_ERROR,
  UPDATE_DATA,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  DELETE_DATA,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_ERROR
} from '../actions';

const INIT_STATE = {
  industries: [],
  languages: [],
  academicDegrees: [],
  memberships: [],
  specializations: [],
  lawyerTypes: [],
  clientTypes: [],
  categories: [],
  orders: [],
  services: [],
  loading: false,
  errorMessage: ''
};

const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_DATA:
      return { ...state, loading: true, errorMessage: '' };
    
    case CREATE_DATA_SUCCESS:
      return { ...state, loading: false, errorMessage: '' };

    case CREATE_DATA_ERROR:
      return { ...state, loading: false, errorMessage: action.payload.message };
    

    case UPDATE_DATA:
      return { ...state, loading: true, errorMessage: '' };
    
    case UPDATE_DATA_SUCCESS:
      return { ...state, loading: false, errorMessage: '' };;

    case UPDATE_DATA_ERROR:
      return { ...state, loading: false, errorMessage: action.payload.message };
      

    case READ_DATA:
      return { ...state, loading: true, errorMessage: '' };
    
    case READ_DATA_SUCCESS:
      let d = { ...state, loading: false, errorMessage: '' };
      d[toCamelCase(action.payload.endpoint)] = action.payload.data;
      return d;

    case READ_DATA_ERROR:
      return { ...state, loading: false, errorMessage: action.payload.message };

    case DELETE_DATA:
      return { ...state, loading: true, errorMessage: '' };
    
    case DELETE_DATA_SUCCESS:
      return { ...state, loading: false, errorMessage: '' };

    case DELETE_DATA_ERROR:
      return { ...state, loading: false, errorMessage: action.payload.message };


    default: return { ...state };
  }
}
