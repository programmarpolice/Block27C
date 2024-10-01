import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const COHORT_CODE = "2408-Joy";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;
// the only way I can get anything to show up was if I added players to the end of the API URL
// but then it breaks everything else

// TODO: configure createApi to use API_URL as the base URL
// TODO: add "Puppy" as a tag type.
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["Puppy"],
});

export default api;
