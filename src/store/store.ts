import { configureStore } from '@reduxjs/toolkit';
import { footballApi } from './api/footbal.api';

export const store = configureStore({
    reducer: {
        [footballApi.reducerPath]: footballApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(footballApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
