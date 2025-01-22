import axios from 'axios';

// Pull the environment variables from .env
const RAPID_API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const RAPID_API_HOST = process.env.REACT_APP_RAPIDAPI_HOST;

export async function fetchIndeedJobs(query, location) {
  try {
    // The base URL is the same as from RapidAPI docs but using the host variable
    const url = `https://${RAPID_API_HOST}/jobs/search`;

    const response = await axios.get(url, {
      params: {
        query: query || 'manager',
        location: location || 'Chicago',
        locality: 'us',
      },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST,
      },
    });

    return response.data; // shape of data depends on Indeed’s response
  } catch (error) {
    console.error('Error fetching Indeed jobs:', error);
    throw error;
  }
}
