import {createReducer, createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  loading: false,
  isLoggedIn: false,
  error: false,
  errorMessage: '',
  uid: '',
};

export const register = createAsyncThunk(
  'user-register',
  async (body, {rejectWithValue}) => {
    const {username, email, password} = body;

    // console.log(user);
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      const user = {
        username: username,
        email: email,
        user_id: res.user.uid,
      };
      const data = await firestore()
        .collection('users')
        .doc(res.user.uid)
        .set(user);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  'user-login',
  async (body, {rejectWithValue}) => {
    console.log(body);
    const {email, password} = body;
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log(res.user);
      return res.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'user-auth',
  initialState,
  reducers: {
    authStateClear: () => initialState,
  },
  extraReducers: {
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [register.rejected]: (state, action) => {},
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.uid = action.payload.uid;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.errorMessage = 'Email or password is wrong';
    },
  },
});
export const {authStateClear} = authSlice.actions;

export default authSlice.reducer;
