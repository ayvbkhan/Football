import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, API_KEY } from '../../utils/baseUrl'
import type { Area } from './types';

export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('X-Auth-Token', API_KEY); 
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAreas: builder.query<Area[], void>({
            query: () => '/areas',
        }),
    }),
});

export const { useGetAreasQuery } = footballApi;