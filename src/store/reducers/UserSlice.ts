import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/models/IUser';
import { fetchUsers } from './ActionCreator';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state: UserState, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
  extraReducers: {
    //услепшная загрузка
    [fetchUsers.fulfilled.type]: (state: UserState, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    },
    //ожидание
    [fetchUsers.pending.type]: (state: UserState) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state: UserState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
