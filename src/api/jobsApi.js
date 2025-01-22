// src/api/jobsApi.js
import axios from 'axios';

const BASE_URL = 'https://api.adzuna.com/v1/api/jobs';
const APP_ID = 'YOUR_ADZUNA_APP_ID';  // <--- replace
const APP_KEY = 'YOUR_ADZUNA_APP_KEY'; // <--- replace

export async function fetchJobListings(query, location) {
  // Example endpoint for Adzuna:
  // https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=xxx&app_key=xxx&results_per_page=5&what=Developer&where=London
  const country = 'us'; // or 'gb', 'au', 'ca', etc.
  const url = `${BASE_URL}/${country}/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10&what=${query}&where=${location}`;

  try {
    const response = await axios.get(url);
    return response.data; // returns Adzuna’s data
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
}
