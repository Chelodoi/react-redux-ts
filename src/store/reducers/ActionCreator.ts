import { IUser } from 'src/models/IUser';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       dispatch(userSlice.actions.usersFetching());

//       setTimeout(async () => {
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//       }, 1000);
//     } catch (e: any) {
//       dispatch(userSlice.actions.usersFetchingError(e.message));
//     }
//   };
// };

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/us2ers');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не получилось не фортануло');
  }
});
