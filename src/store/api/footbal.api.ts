import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, API_KEY } from '../../utils/baseUrl'
import type { AreasResponse, CompetitionResponse, MatchResponse } from './types';

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
        getAreas: builder.query<AreasResponse, void>({
            query: () => ({
                url: "/areas",
                method: 'GET'
            }),
        }),
        getCompetitions: builder.query<CompetitionResponse, void>({
            query: () => ({
                url: '/competitions',
                method: 'GET'
            }),
        }),
        getMatches: builder.query<MatchResponse, number>({
            query: (teamId) => ({
                url: `/teams/${teamId}/matches`,
                method: 'GET'
            }),
        }),
    }),
});

export const { useGetAreasQuery, useGetCompetitionsQuery, useGetMatchesQuery } = footballApi;