import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { AreasResponse, CompetitionResponse, MatchResponse } from './types';

export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/proxy', // Используем прокси-роут
    }),
    endpoints: (builder) => ({
        getAreas: builder.query<AreasResponse, void>({
            query: () => ({
                url: '',
                params: {
                    path: 'areas'
                }
            }),
        }),
        getCompetitions: builder.query<CompetitionResponse, void>({
            query: () => ({
                url: '',
                params: {
                    path: 'competitions'
                }
            }),
        }),
        getMatches: builder.query<MatchResponse, number>({
            query: (teamId) => ({
                url: '',
                params: {
                    path: `teams/${teamId}/matches`
                }
            }),
        }),
    }),
});

export const { useGetAreasQuery, useGetCompetitionsQuery, useGetMatchesQuery } = footballApi;