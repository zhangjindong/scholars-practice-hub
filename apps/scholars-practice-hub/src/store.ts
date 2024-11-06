import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '@scholars-practice-hub/supabase';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: { users: usersReducer },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
