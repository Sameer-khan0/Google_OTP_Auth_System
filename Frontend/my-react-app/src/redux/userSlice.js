import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      username:'',
      email:''
    },
  },
  reducers: {
    getUser: (state, action) => {
      const {username,email}=action.payload
      state.user.username = username;
      state.user.email = email;
    },
  },
});

export const { getUser } = userSlice.actions; 

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4022/api/user/auth/getuser', {
      headers: {
        'token': localStorage.getItem('token')
      }
    });

    const userData = response.data.userData;
    dispatch(getUser(userData)); 
  } catch (error) {
    console.error('Error fetching user data', error);
  }
};

export default userSlice.reducer;
